import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import { createBottomTabNavigator } from 'react-navigation-tabs'; // 1.0.0-beta.27
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home'
import Settings from './components/Settings'

class HomeScreen extends React.Component {
  render() {
    return (
     <Home/>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Settings/>
    );
  }
}

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home"
            color={tintColor}
            size={24}
          />
        )
      })
     },
    Settings: { screen: SettingsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="gears"
            color={tintColor}
            size={24}
          />
        )
      })
    },
  },
  {

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#1a66c9',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
));
