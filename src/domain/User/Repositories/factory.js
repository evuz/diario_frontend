import { Singleton } from 'ts-domain';

import FirebaseUserRepository from './FirebaseUserRepository';

class UserRepositoryFactory {
  static firebaseUserRepository = ({ config }) =>
    Singleton(
      { singleton: FirebaseUserRepository, type: 'FirebaseUserRepository' },
      { config },
    );
}

export default UserRepositoryFactory;
