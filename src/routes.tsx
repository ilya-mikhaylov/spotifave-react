import * as React from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';

import { WelcomePageContainer, StatsContainer } from './components';
import { LayoutContainer } from './components/Layout';

const Routes: React.SFC = () => (
  <LayoutContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePageContainer} />
        <Route path="/stats" component={StatsContainer} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  </LayoutContainer>
);

export default Routes;
