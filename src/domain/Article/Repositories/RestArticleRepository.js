import Article from '../Entities/Article';
import User from '../../User/Entities/User';

class RestArticleRepository {
  constructor({ httpClient, config }) {
    this.repoUrl = config.repo_url || config.repoUrl;
    if (!this.repoUrl) {
      throw Error('You must set a repoUrl in your config');
    }

    this.httpClient = httpClient;
    this.perPage = config.per_page || config.perPage;
    this.state = config.state;
  }

  getArticleByNumber({ number }) {
    return this.httpClient
      .get(`/repos/${this.repoUrl}/issues/${number}`)
      .then(({ data }) => this.generateArticleEntity(data));
  }

  getArticlesFromRepository({ config = {} }) {
    const perPage = config.perPage || config.per_page || this.perPage;
    const state = config.state || this.state;
    const queryPerPage = perPage ? `per_page=${perPage}` : '';
    const queryState = state ? `state=${state}` : '';
    const queryParams = [queryPerPage, queryState].filter(e => e).join('&');
    return this.httpClient
      .get(`/repos/${this.repoUrl}/issues?${queryParams}`)
      .then(({ data }) => {
        return data.map(this.generateArticleEntity);
      });
  }

  generateArticleEntity(article) {
    const { user } = article;
    const userEntity = new User({
      id: user.id,
      name: user.login,
      avatarUrl: user.avatar_url,
      url: user.html_url,
    });
    const art = new Article({
      id: article.id,
      number: article.number,
      title: article.title,
      body: article.body,
      user: userEntity,
      createdAt: article.created_at,
      updatedAt: article.updated_at,
    });
    return art;
  }
}

export default RestArticleRepository;
