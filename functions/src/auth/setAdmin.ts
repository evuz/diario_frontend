import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const setAdmin = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('users')
    .doc(user.email)
    .set({
      admin: false,
    });
});
