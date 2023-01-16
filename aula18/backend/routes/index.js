import { testRoute } from './test.js';
import { addNewDog, getAllDogs } from './dogs.js';
import { signup, signin } from './auth.js';
import verifyEmailCode from './email.js';

export const routes = [testRoute, addNewDog, getAllDogs, signup, signin, verifyEmailCode];
