import Issue from '../Entities/Issue';
import User from '../../User/Entities/User';

class RestIssueRepository {
  constructor({ httpClient, config }) {
    this.repoUrl = config.repo_url || config.repoUrl;
    if (!this.repoUrl) {
      throw Error('You must set a repoUrl in your config');
    }

    this.httpClient = httpClient;
    this.perPage = config.per_page || config.perPage;
    this.state = config.state;
  }

  getIssueFromRepository({ config = {} }) {
    const perPage = config.perPage || config.per_page || this.perPage;
    const state = config.state || this.state;
    const queryPerPage = perPage ? `per_page=${perPage}` : '';
    const queryState = state ? `state=${state}` : '';
    const queryParams = [queryPerPage, queryState].filter(e => e).join('&');
    return this.httpClient
      .get(`/repos/${this.repoUrl}/issues?${queryParams}`)
      .then(({ data }) => data.map(this.generateIssueEntity));
  }

  generateIssueEntity(issue) {
    const { user } = issue;
    const userEntity = new User({
      id: user.id,
      name: user.login,
      avatarUrl: user.avatar_url,
      url: user.html_url,
    });
    return new Issue({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      body: issue.body,
      user: userEntity,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
    });
  }
}

export default RestIssueRepository;
