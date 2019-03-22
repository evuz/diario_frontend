import { Singleton } from 'ts-domain';

import ArticleRepositoryFactory from '../Repositories/factory';
import GetArticlesFromRepositoryService from './GetArticlesFromRepositoryService';
import GetArticleByNumberService from './GetArticleByNumberService';

class ArticleServicesFactory {
  static getArticlesFromRepositoryService = ({ config }) =>
    Singleton(
      {
        singleton: GetArticlesFromRepositoryService,
        type: 'GetArticlesFromRepositoryService',
      },
      {
        repository: ArticleRepositoryFactory.restArticleRepository({ config }),
      },
    );
  static getArticleByNumberService = ({ config }) =>
    Singleton(
      {
        singleton: GetArticleByNumberService,
        type: 'GetArticleByNumberService',
      },
      {
        repository: ArticleRepositoryFactory.restArticleRepository({ config }),
      },
    );
}

export default ArticleServicesFactory;
