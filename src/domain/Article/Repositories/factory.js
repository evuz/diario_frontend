import { Singleton } from 'ts-domain';

import httpClient from '../../httpClient';

import RestArticleRepository from './RestArticleRepository';

class ArticleRepositoriesFactory {
  static restArticleRepository = ({ config }) =>
    Singleton(
      { singleton: RestArticleRepository, type: 'RestArticleRepository' },
      { config, httpClient },
    );
}

export default ArticleRepositoriesFactory;
