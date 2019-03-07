import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleList from './views/ArticleList';
import NotFound from './views/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ArticleList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
