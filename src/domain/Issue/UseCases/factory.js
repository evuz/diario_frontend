import GetIssuesFromRepositoryUseCase from './GetIssuesFromRepositoryUseCase';
import GetIssueByNumberUseCase from './GetIssueByNumberUseCase';
import IssueServicesFactory from '../Services/factory';

class IssueUseCaseFactory {
  static getIssuesFromRepositoryUseCase = ({ config }) =>
    new GetIssuesFromRepositoryUseCase({
      service: IssueServicesFactory.getIssuesFromRepositoryService({ config }),
    });
  static getIssueByNumberUseCase = ({ config }) =>
    new GetIssueByNumberUseCase({
      service: IssueServicesFactory.getIssueByNumberService({ config }),
    });
}

export default IssueUseCaseFactory;
