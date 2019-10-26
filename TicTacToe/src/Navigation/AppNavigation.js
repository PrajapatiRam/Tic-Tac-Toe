'use strict';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackNavigatorHelper} from 'react-navigation-helper';

import {Player1, Player2, Home} from '../UI';

const navigationOptions = {gesturesEnabled: false};

const MainNavigator = createStackNavigator(
  {
    Player1Scene: {
      screen: Player1,
      navigationOptions,
    },
    Player2Scene: {
      screen: Player2,
      navigationOptions,
    },
    HomeScene: {
      screen: Home,
      navigationOptions,
    },
  },
  {
    initialRouteName: 'Player1Scene',
    headerMode: 'none',
    cardStyle: {backgroundColor: 'transparent'},
    transitionConfig: () =>
      StackNavigatorHelper.transitionConfig({
        Player2Scene: 'present',
      }),
  },
);

export default createAppContainer(MainNavigator);
