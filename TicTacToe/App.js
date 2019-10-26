import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/Navigation/AppNavigation';
import {ReduxStore} from './src/Redux/ReduxStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={ReduxStore()}>
        <AppNavigation />
      </Provider>
    );
  }
}
