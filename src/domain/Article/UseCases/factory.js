import GetArticlesUseCase from './GetArticlesUseCase';
import CreateArticleUseCase from './CreateArticleUseCase';
import GetArticleByNumberUseCase from './GetArticleByNumberUseCase';
import ArticleServicesFactory from '../Services/factory';

class ArticleUseCaseFactory {
  static getArticlesUseCase = ({ config }) =>
    new GetArticlesUseCase({
      service: ArticleServicesFactory.getArticlesService({
        config,
      }),
    });
  static getArticleByNumberUseCase = ({ config }) =>
    new GetArticleByNumberUseCase({
      service: ArticleServicesFactory.getArticleByNumberService({ config }),
    });
  static createArticleUseCase = ({ config }) =>
    new CreateArticleUseCase({
      service: ArticleServicesFactory.createArticleService({ config }),
    });
}

export default ArticleUseCaseFactory;
