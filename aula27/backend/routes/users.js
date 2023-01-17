/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import { ConnectionClosedEvent, ObjectId } from 'mongodb';
import { getDbConnection } from '../db.js';

export const getAllUsers = {
  path: '/api/users',
  method: 'get',
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    await db
      .collection('users')
      .find({})
      .toArray((err, result) => {
        res.status(200).send(result);
      });
  },
};

export const getUserById = {
  path: '/api/users/:id',
  method: 'get',
  handler: async (req, res) => {
    const { id } = req.params;
    const db = getDbConnection(process.env.DB_NAME);
    const result = await db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    res.status(200).send(result);
  },
};

export const createUser = {
  path: '/api/users',
  method: 'post',
  handler: async (req, res) => {
    const { name, email, type, isVerified } = req.body;
    const db = getDbConnection(process.env.DB_NAME);
    const result = await db.collection('users').insert({
      name,
      email,
      type,
      isVerified,
    });
    res.status(200).send(result);
  },
};

export const deleteUser = {
  path: '/api/users/:id',
  method: 'delete',
  handler: async (req, res) => {
    const { id } = req.params;
    const db = getDbConnection(process.env.DB_NAME);
    await db.collection('users').deleteOne({ _id: new ObjectId(id) });
    res.status(200).send();
  },
};

export const editUser = {
  path: '/api/users/:id',
  method: 'put',
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    const { id } = req.params;
    const { name, email, type } = req.body;
    const result = await db
      .collection('users')
      .updateOne({ _id: new ObjectId(id) }, { $set: { name, email, type } });
    res.status(200).json(result);
  },
};
