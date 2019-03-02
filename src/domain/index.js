import { Domain } from 'ts-domain';
import IssueUseCaseFactory from './Issue/UseCases/factory';

const config = {
  repoUrl: process.env.REPO_URL,
  perPage: 2,
  state: 'open',
};
const useCases = {
  get_issues: IssueUseCaseFactory.getIssuesFromRepositoryService({ config }),
};

export default new Domain({ useCases, config });
