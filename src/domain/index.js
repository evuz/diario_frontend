import { Domain } from 'ts-domain';
import firebase from 'firebase/app';
import 'firebase/auth';

import ArticleUseCaseFactory from './Article/UseCases/factory';
import UserUseCaseFactory from './User/UseCases/factory';
import httpClient from './httpClient';

const config = {};
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'yafrontendblog.firebaseapp.com',
  databaseURL: 'https://yafrontendblog.firebaseio.com',
  projectId: 'yafrontendblog',
  storageBucket: 'yafrontendblog.appspot.com',
  messagingSenderId: '321995828395',
};

const useCases = {
  get_articles: ArticleUseCaseFactory.getArticlesFromRepositoryUseCase({
    config,
  }),
  get_article: ArticleUseCaseFactory.getArticleByNumberUseCase({ config }),
  create_article: ArticleUseCaseFactory.createArticleUseCase({ config }),
  login: UserUseCaseFactory.githubLoginUserUseCase({ config }),
  logout: UserUseCaseFactory.logoutUseCase({ config }),
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const domain = new Domain({ useCases, config });
domain.setConfig({ key: 'http', config: httpClient });
domain.setConfig({ key: 'firebase', config: firebase });
domain.setConfig({ key: 'repo_url', config: process.env.REPO_URL });
domain.setConfig({ key: 'per_page', config: 2 });
domain.setConfig({ key: 'state', config: 'open' });

export default domain;
