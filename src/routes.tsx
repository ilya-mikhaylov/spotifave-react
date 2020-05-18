import * as React from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';

import { NumberViewerContainer, WelcomePageContainer, StatsContainer } from './components';
import { LayoutContainer } from './components/Layout';

const Routes: React.SFC = () => (
  <LayoutContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePageContainer} />
        <Route path="/stats" component={StatsContainer} />
        <Route path="/test" component={NumberViewerContainer} />
        <Route component={() => <div>not found</div>} />
      </Switch>
    </BrowserRouter>
  </LayoutContainer>
);

export default Routes;
