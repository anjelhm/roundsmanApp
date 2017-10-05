import React from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from './src/navegador/Navegador';

import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends React.Component {

  constructor() {
    super();

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

  }

  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState/>
      </Provider>
    );
  }

}
