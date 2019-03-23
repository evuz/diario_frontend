import { Singleton } from 'ts-domain';

import UserRepositoryFactory from '../Repositories/factory';
import GithubLoginUserService from './GithubLoginUserService';

class UserServiceFactory {
  static githubLoginUserService = ({ config }) =>
    Singleton(
      { singleton: GithubLoginUserService, type: 'GithubLoginUserService' },
      { repository: UserRepositoryFactory.firebaseUserRepository({ config }) },
    );
}

export default UserServiceFactory;
