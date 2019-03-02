import { Singleton } from 'ts-domain';

import httpClient from '../../httpClient';

import RestIssueRepository from './RestIssueRepository';

class IssueRepositoriesFactory {
  static restIssueRepository = ({ config }) =>
    Singleton(
      { singleton: RestIssueRepository, type: 'RestIssueRepository' },
      { config, httpClient },
    );
}

export default IssueRepositoriesFactory;
