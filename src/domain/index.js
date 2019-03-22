import { Domain } from 'ts-domain';
import ArticleUseCaseFactory from './Article/UseCases/factory';

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
};

export default new Domain({ useCases, config });
