import { Singleton } from 'ts-domain';

import UserRepositoryFactory from '../Repositories/factory';
import GithubLoginUserService from './GithubLoginUserService';
import GetTokenService from './GetTokenService';

class UserServiceFactory {
  static githubLoginUserService = ({ config }) =>
    Singleton(
      { singleton: GithubLoginUserService, type: 'GithubLoginUserService' },
      { repository: UserRepositoryFactory.firebaseUserRepository({ config }) },
    );

  static getTokenService = ({ config }) =>
    Singleton(
      { singleton: GetTokenService, type: 'GetTokenService' },
      { repository: UserRepositoryFactory.firebaseUserRepository({ config }) },
    );
}

export default UserServiceFactory;
