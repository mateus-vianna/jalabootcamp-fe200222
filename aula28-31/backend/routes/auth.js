/* eslint-disable import/prefer-default-export */
import bcrcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { getDbConnection } from '../db.js';
import sendEmail from '../webServices/sendMail.js';

export const signup = {
  path: '/api/auth/signup',
  method: 'post',
  handler: async (req, res) => {
    const { name, email, password } = req.body;
    const db = getDbConnection(process.env.DB_NAME);
    const user = await db.collection('users').findOne({ email });

    if (user) { res.sendStatus(409); }
    const passwordHash = await bcrcrypt.hash(password, 10);

    const verificationString = uuidv4();

    const result = await db.collection('users').insertOne({
      name,
      email,
      passwordHash,
      isVerified: false,
      verificationString,
    });

    const { insertId } = result;

    try {
      await sendEmail({
        to: email,
        from: process.env.SENDGRID_SENDER_MAIL, // mawavial@gmail.com
        subject: 'Please verify your email',
        text: `Thanks for signing up! To verify yoiur email, click here: ${process.env.FRONT}/verify/${verificationString}`,
      });
    } catch (err) {
      console.log('Signup route error: ', err);
      res.status(500);
    }

    jwt.sign({
      insertId, email, name, isVerified: false, verificationString,
    }, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) { return res.sendStatus(500).send(err); }
      return res.status(201).json({ token });
    });
  },
};

export const signin = {
  path: '/api/auth/login',
  method: 'post',
  handler: async (req, res) => {
    const {
      email, password,
    } = req.body;

    const db = getDbConnection(process.env.DB_NAME);
    const user = await db.collection('users').findOne({ email });
    if (!user) return res.sendStatus(401);

    // TODO remove verificationString before mergin into prod
    const {
      _id: id, passwordHash, name, isVerified, verificationString,
    } = user;

    const isCorrect = await bcrcrypt.compare(password, passwordHash);
    if (isCorrect) {
      jwt.sign({
        id, name, email, isVerified, verificationString,
      }, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
        if (err) {
          res.status(500).json(err);
        }
        res.status(201).json({ token });
      });
    } else {
      res.sendStatus(401);
    }
  },
};
