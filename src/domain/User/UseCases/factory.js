import UserServiceFactory from '../Services/factory';
import GithubLoginUserUseCase from './GithubLoginUserUseCase';

class UserUseCaseFactory {
  static githubLoginUserService = ({ config }) =>
    new GithubLoginUserUseCase({
      service: UserServiceFactory.githubLoginUserService({ config }),
    });
}

export default UserUseCaseFactory;
