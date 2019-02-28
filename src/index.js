import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import App from './app';

import './assets/reset.css';
import './index.scss';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'yafrontendblog.firebaseapp.com',
  projectId: 'yafrontendblog',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

/* eslint-disable-next-line */
ReactDOM.render(<App />, document.getElementById('app'));
