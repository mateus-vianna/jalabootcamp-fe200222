import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
