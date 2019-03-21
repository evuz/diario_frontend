import * as admin from 'firebase-admin';

import { readTimeArticles } from './firestore/articles/onUpdate'
import { setAdmin } from './auth/setAdmin'
import { server } from './server';

admin.initializeApp();

export const authSetAdmin = setAdmin;
export const httpServer = server;
export const onUpdateArticles = readTimeArticles;
