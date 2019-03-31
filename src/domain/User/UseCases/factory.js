import UserServiceFactory from '../Services/factory';
import GithubLoginUserUseCase from './GithubLoginUserUseCase';
import LogoutUseCase from './LogoutUseCase';

class UserUseCaseFactory {
  static githubLoginUserUseCase = ({ config }) =>
    new GithubLoginUserUseCase({
      service: UserServiceFactory.githubLoginUserService({ config }),
    });

  static logoutUseCase = ({ config }) =>
    new LogoutUseCase({
      service: UserServiceFactory.logoutService({ config }),
    });
}

export default UserUseCaseFactory;
