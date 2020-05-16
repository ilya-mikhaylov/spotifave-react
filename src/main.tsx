import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { NumberViewerContainer } from './components';
import { store } from './store';

import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <>
      <NumberViewerContainer />
    </>
  </Provider>,
  document.getElementById('root'),
);
