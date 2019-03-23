import ArticleRepository from './ArticleRepository';
import Article from '../Entities/Article';
import User from '../../User/Entities/User';

class RestArticleRepository extends ArticleRepository {
  get perPage() {
    return this.config.per_page || this.config.perPage;
  }

  get repoUrl() {
    const value = this.config.repo_url || this.config.repoUrl;
    if (!value) {
      throw Error('You must set a repoUrl in your config');
    }
    return value;
  }

  get state() {
    return this.config.state;
  }

  constructor({ config }) {
    super();
    this.config = config;
  }

  getArticleByNumber({ number }) {
    const { http } = this.config;
    return http
      .get(`/repos/${this.repoUrl}/issues/${number}`)
      .then(({ data }) => this.generateArticleEntity(data));
  }

  getArticlesFromRepository({ config = {} }) {
    const perPage = config.perPage || config.per_page || this.perPage;
    const state = config.state || this.state;
    const queryPerPage = perPage ? `per_page=${perPage}` : '';
    const queryState = state ? `state=${state}` : '';
    const queryParams = [queryPerPage, queryState].filter(e => e).join('&');
    const { http } = this.config;
    return http
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
