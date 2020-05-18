import * as React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { NumberViewerContainer } from './components';

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={NumberViewerContainer} />
      <Route path="/test" component={NumberViewerContainer} />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
