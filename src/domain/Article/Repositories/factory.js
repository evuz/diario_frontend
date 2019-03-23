import { Singleton } from 'ts-domain';

import RestArticleRepository from './RestArticleRepository';
import FirebaseArticleRepository from './FirebaseArticleRepository';

class ArticleRepositoriesFactory {
  static restArticleRepository = ({ config }) =>
    Singleton(
      { singleton: RestArticleRepository, type: 'RestArticleRepository' },
      { config },
    );
  static firebaseArticleRepository = ({ config }) =>
    Singleton(
      {
        singleton: FirebaseArticleRepository,
        type: 'FirebaseArticleRepository',
      },
      { config },
    );
}

export default ArticleRepositoriesFactory;
