import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client';
// import reportWebVitals from './reportWebVitals';
import history from './history';
import configureStore from './store/store';

const store = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Client store={store} history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);
