import { Domain } from 'ts-domain';

import ArticleUseCaseFactory from './Article/UseCases/factory';
import httpClient from './httpClient';

const config = {
  repoUrl: process.env.REPO_URL,
  perPage: 2,
  state: 'open',
};
const useCases = {
  get_articles: ArticleUseCaseFactory.getArticlesFromRepositoryUseCase({
    config,
  }),
  get_article: ArticleUseCaseFactory.getArticleByNumberUseCase({ config }),
  create_article: ArticleUseCaseFactory.createArticleUseCase({ config }),
};

const domain = new Domain({ useCases, config });
domain.setConfig({ key: 'http', config: httpClient });

export default domain;
