import { Domain } from 'ts-domain';
import IssueUseCaseFactory from './Issue/UseCases/factory';

const config = {
  repoUrl: process.env.REPO_URL,
  perPage: 2,
  state: 'open',
};
const useCases = {
  get_issues: IssueUseCaseFactory.getIssuesFromRepositoryUseCase({ config }),
  get_issue: IssueUseCaseFactory.getIssueByNumberUseCase({ config }),
};

export default new Domain({ useCases, config });
