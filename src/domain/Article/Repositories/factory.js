import { Singleton } from 'ts-domain';

import httpClient from '../../httpClient';

import RestArticleRepository from './RestArticleRepository';
import FirebaseArticleRepository from './FirebaseArticleRepository';

class ArticleRepositoriesFactory {
  static restArticleRepository = ({ config }) =>
    Singleton(
      { singleton: RestArticleRepository, type: 'RestArticleRepository' },
      { config, httpClient },
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
