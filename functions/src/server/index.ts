import * as functions from 'firebase-functions';
import * as express from 'express';

import { isAdmin } from './middlewares/isAdmin';

const app = express();

app.post('/article', isAdmin, (req, res) => {
  return res.sendStatus(200);
});

export const server = functions.https.onRequest(app);
