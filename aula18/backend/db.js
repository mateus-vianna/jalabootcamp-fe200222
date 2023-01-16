import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient('mongodb+srv://root:1UyF6kuryxWqXuBF@cluster0.88lwex7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = () => {
  const db = client.db('Cluster0');
  return db;
};
