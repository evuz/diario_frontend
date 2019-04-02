import { Singleton } from 'ts-domain';

import ArticleRepositoryFactory from '../Repositories/factory';
import GetArticlesService from './GetArticlesService';
import CreateArticleService from './CreateArticleService';
import GetArticleByNumberService from './GetArticleByNumberService';
import UserServiceFactory from '../../User/Services/factory';

class ArticleServicesFactory {
  static getArticlesService = ({ config }) =>
    Singleton(
      {
        singleton: GetArticlesService,
        type: 'GetArticlesService',
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
  static createArticleService = ({ config }) =>
    Singleton(
      {
        singleton: CreateArticleService,
        type: 'CreateArticleService',
      },
      {
        repository: ArticleRepositoryFactory.firebaseArticleRepository({
          config,
        }),
        getTokenService: UserServiceFactory.getTokenService({ config }),
      },
    );
}

export default ArticleServicesFactory;
