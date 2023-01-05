/* eslint-disable import/prefer-default-export */
import { getDbConnection } from '../db.js';

export const getAllUsers = {
  path: '/api/users',
  method: 'get',
  handler: async (req, res) => {
    const db = getDbConnection(process.env.DB_NAME);
    await db.collection('users').find({}).toArray((err, result) => {
      res.status(200).send(result);
    });
  },
};
