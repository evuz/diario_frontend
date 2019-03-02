import { Singleton } from 'ts-domain';

import IssueRepositoryFactory from '../Repositories/factory';
import GetIssuesFromRepositoryService from './GetIssuesFromRepositoryService';

class IssueServicesFactory {
  static getIssuesFromRepositoryService = ({ config }) =>
    Singleton(
      {
        singleton: GetIssuesFromRepositoryService,
        type: 'GetIssuesFromRepositoryService',
      },
      { repository: IssueRepositoryFactory.restIssueRepository({ config }) },
    );
}

export default IssueServicesFactory;
