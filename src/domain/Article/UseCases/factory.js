import GetArticlesFromRepositoryUseCase from './GetArticlesFromRepositoryUseCase';
import GetArticleByNumberUseCase from './GetArticleByNumberUseCase';
import ArticleServicesFactory from '../Services/factory';

class ArticleUseCaseFactory {
  static getArticlesFromRepositoryUseCase = ({ config }) =>
    new GetArticlesFromRepositoryUseCase({
      service: ArticleServicesFactory.getArticlesFromRepositoryService({
        config,
      }),
    });
  static getArticleByNumberUseCase = ({ config }) =>
    new GetArticleByNumberUseCase({
      service: ArticleServicesFactory.getArticleByNumberService({ config }),
    });
}

export default ArticleUseCaseFactory;
