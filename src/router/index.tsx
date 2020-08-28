import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Repository from './Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" exact component={Repository} />

  </Switch>
);

export default Routes;
