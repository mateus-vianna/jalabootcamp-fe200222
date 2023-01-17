/* eslint-disable import/extensions */
import { testRoute } from './test.js';
import { addNewDog, getAllDogs } from './dogs.js';
import { signup, signin } from './auth.js';
import verifyEmailCode from './email.js';
import { createUser, deleteUser, editUser, getAllUsers, getUserById } from './users.js';

export const routes = [
  testRoute,
  addNewDog,
  getAllDogs,
  signup,
  signin,
  verifyEmailCode,
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  editUser,
];
