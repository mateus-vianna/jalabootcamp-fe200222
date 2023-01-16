/* eslint-disable import/prefer-default-export */
import { getDbConnection } from '../db.js';

export const addNewDog = {
  path: '/api/dogs',
  method: 'post',
  handler: async (req, res) => {
    const {
      name, age, breed, transaction,
    } = req.body;
    const db = getDbConnection(process.env.DB_NAME);
    const result = await db.collection('dogs').insertOne({
      name,
      age,
      breed,
      transaction,
    });
    res.status(200).json(result);
  },
};

export const getAllDogs = {
  path: '/api/dogs',
  method: 'get',
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    await db.collection('dogs').find({}).toArray((err, result) => {
      res.status(200).send(result);
    });
  },
};
