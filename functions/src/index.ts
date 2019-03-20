import * as admin from 'firebase-admin';

import { setAdmin } from './auth/setAdmin'

admin.initializeApp();

export const authSetAdmin = setAdmin;
