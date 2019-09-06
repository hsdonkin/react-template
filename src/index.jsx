import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

import App from './App';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

// app gets rendered here
render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}



/* eslint-disable import/no-extraneous-dependencies */
/*
issue with react-hot-loader
eventhough those 2 dependencies are only used in development
eslint has no way to tell that and outputs an error
*/
