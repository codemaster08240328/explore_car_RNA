import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, TabBarBottomProps, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation'; 
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native'

import Alerts from './screen/Alerts';
import Favorites from './screen/Favorites';
import Explore from './screen/Explore';
import BlogCar from './screen/BlogCar';
import CarValuator from './screen/CarValuator';
import ContactUs from './screen/ContactUs';
import Feedback from './screen/Feedback';
import Invite from './screen/Invite';
import Notifications from './screen/Notifications';
import SellCar from './screen/SellCar';
import { DrawerLayout } from './component';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const Tab = createMaterialTopTabNavigator(
  {
    Explore: { screen: Explore },
    Alerts: { screen: Alerts },
    Favorites: { screen: Favorites }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === 'Explore') {
          iconName = `ios-car`;
          iconType = 'ionicon';
          iconSize = 30;
        } else if (routeName === 'Alerts') {
          iconName = `bell`;
          iconType = 'font-awesome';
          iconSize = 25;
        }else if (routeName === 'Favorites') {
          iconName = `md-heart`;
          iconType = 'ionicon';
          iconSize = 30;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={iconSize} color={tintColor} type={iconType} />;
      }
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#007cca',
      inactiveTintColor: '#3f3f3f',
      showIcon: true,
      style: { backgroundColor: '#f7f6f6', padding: 0},
      upperCaseLabel: false,
      pressColor: '#007cca',
      indicatorStyle: { backgroundColor: '#007cca' },
      tabStyle: { padding: 0},
      iconStyle: { marginBottom: -10, width: 30 },
      labelStyle: { padding: 0 }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
)

const Drawer = createDrawerNavigator(
  {
    Tab: {
      screen: Tab,

    },
    Notifications: {
      screen: Notifications,
    },
    SellCar: {
      screen: SellCar,
    },
    CarValuator: {
      screen: CarValuator,
    },
    BlogCar: {
      screen: BlogCar,
    },  
    Invite: {
      screen: Invite,
    },
    ContactUs: {
      screen: ContactUs
    },
    Feedback: {
      screen: Feedback,
    }
  },
  {
    drawerWidth: Dimensions.get('window').width,
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#007cca',
      inactiveTintColor: '#7f7f7f',
      inactiveBackgroundColor: 'white'    
    },
    contentComponent: DrawerLayout
  }
)

export default class App extends Component {
  render() {
    return (
      <Drawer/>
    );
  }
}

