import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

/**
 * Context:
 * You received the content of the variable data (./src/data.ts) from API.
 * It's a collection of contractors, the countries they work with and if they can work remotely.
 * 
 * To do:
 * - We want to extract a sorted list of all countries for which the contractor remote attribute is true.
 * - Add new endpoint to expose that list
 */

app.listen(8000, () => console.log('Listening to port 8000'));
