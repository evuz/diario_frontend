import { Singleton } from 'ts-domain';

import IssueRepositoryFactory from '../Repositories/factory';
import GetIssuesFromRepositoryService from './GetIssuesFromRepositoryService';
import GetIssueByNumberService from './GetIssueByNumberService';

class IssueServicesFactory {
  static getIssuesFromRepositoryService = ({ config }) =>
    Singleton(
      {
        singleton: GetIssuesFromRepositoryService,
        type: 'GetIssuesFromRepositoryService',
      },
      { repository: IssueRepositoryFactory.restIssueRepository({ config }) },
    );
  static getIssueByNumberService = ({ config }) =>
    Singleton(
      {
        singleton: GetIssueByNumberService,
        type: 'GetIssueByNumberService',
      },
      { repository: IssueRepositoryFactory.restIssueRepository({ config }) },
    );
}

export default IssueServicesFactory;
