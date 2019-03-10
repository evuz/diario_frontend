import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleList from './views/ArticleList';
import Article from './views/Article';
import NotFound from './views/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ArticleList} />
        <Route path="/article/:number" exact component={Article} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
