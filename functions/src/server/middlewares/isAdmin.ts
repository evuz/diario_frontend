import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

export interface RequestWithUser extends Request {
  user: admin.auth.DecodedIdToken
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    res.status(403).send('Unauthorized');
    return;
  }
  const token = req.headers.authorization.split('Bearer ')[1];
  return admin.auth().verifyIdToken(token)
    .then(user => {
      (<any>req).user = user;
      return admin.firestore().collection('users').doc(user.email).get()
    })
    .then(doc => {
      if (!doc.exists) {
        res.status(403).send('Unauthorized');
        return;
      }
      const data = doc.data();
      if (!data || !data.admin) {
        res.status(403).send('Unauthorized');
        return;
      }
      next();
    })
    .catch(() => {
      res.status(403).send('Unauthorized');
    });
}
