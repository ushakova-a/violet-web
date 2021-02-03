import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routes';

import './main.scss';
import './theme/new-theme.less';

function Client({ store, history }) {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default Client;
