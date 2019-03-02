import GetIssuesFromRepositoryUseCase from './GetIssuesFromRepositoryUseCase';
import IssueServicesFactory from '../Services/factory';

class IssueUseCaseFactory {
  static getIssuesFromRepositoryService = ({ config }) =>
    new GetIssuesFromRepositoryUseCase({
      service: IssueServicesFactory.getIssuesFromRepositoryService({ config }),
    });
}

export default IssueUseCaseFactory;
