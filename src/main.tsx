import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <>
      <Routes />
    </>
  </Provider>,
  document.getElementById('root'),
);
