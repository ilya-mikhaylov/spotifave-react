import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { NumberViewerContainer } from './components';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <>
      <Routes />
    </>
  </Provider>,
  document.getElementById('root'),
);
