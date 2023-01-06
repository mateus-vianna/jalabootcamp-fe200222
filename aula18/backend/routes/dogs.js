/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/extensions
import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db.js';

export const addNewDog = {
  path: '/api/dogs',
  method: 'post',
  handler: async (req, res) => {
    const {
      name, age, breed, transaction,
    } = req.body;
    const db = getDbConnection('jalauniv');
    const result = await db.collection('dogs').insertOne({
      name,
      age,
      breed,
      transaction,
    });
    res.status(200).json(result);
  },
};

export const getDogById = {
  path: '/api/dogs/:id',
  method: 'get',
  handler: async (req, res) => {
    const { id } = req.params;

    const db = getDbConnection('jalauniv');
    await db.collection('dogs').findOne({ _id: ObjectId(id) }, (err, result) => {
      res.status(200).send(result);
    });
  },
};

export const getAllDogs = {
  path: '/api/dogs',
  method: 'get',
  handler: async (req, res) => {
    const db = getDbConnection('jalauniv');
    await db.collection('dogs').find({}).toArray((err, result) => {
      res.status(200).send(result);
    });
  },
};
