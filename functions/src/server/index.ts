import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as readingTime from 'reading-time';

import { isAdmin } from './middlewares/isAdmin';

const app = express();
app.use(cors({origin: true}))

app.post('/article', isAdmin, (req, res) => {
  const article = req.body;
  article.readTime = readingTime(article.body).minutes;
  return admin.firestore().collection('articles').add(article).then(data => {
    res.status(200).send(data);
  })
});

export const server = functions.https.onRequest(app);
