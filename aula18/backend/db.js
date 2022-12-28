import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient("mongodb+srv://frontend:dev123@meumundinho.dcezssp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
