import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, TabBarBottomProps, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation'; 
import { Icon } from 'react-native-elements';
import { Dimensions } from 'react-native'
import { HeaderIcon } from './component'

import Favorites from './screen/Favorites';
import Explore from './screen/Explore';
import ContactUs from './screen/ContactUs';
import Notifications from './screen/Notifications';
import Detail from './screen/Detail';
import { DrawerLayout } from './component';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const Stock = createStackNavigator(
  {
    Explore: { screen: Explore },
    Detail: { screen: Detail }
  },
  {
    headerMode: 'none'
  }
)

const Favor = createStackNavigator(
  {
    Favorites: { screen: Favorites },
    Detail: { screen: Detail }
  },
  {
    headerMode: 'none'
  }
)


const Tab = createMaterialTopTabNavigator(
  {
    Stock: { screen: Stock },
    Favorites: { screen: Favor }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType, iconSize;
        if (routeName === 'Stock') {
          iconName = `ios-car`;
          iconType = 'ionicon';
          iconSize = 30;
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

const customDrawerContent = (props)=>(
  <View style={styles.container}>
    <View style={styles.drawerheader}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <HeaderIcon name='close' color='#7f7f7f' type='material-community' onPress={()=> { props.navigation.closeDrawer()}} />               
      </View>
      <View style = {styles.drawerheaderTilte}>    
        <Text style={{ fontSize:17 }}>Menu</Text>                      
      </View>            
      <View style={{flex: 1}}></View>        
    </View>
    <View style = {styles.drawbody}>
      <DrawerItems {...props}/>                        
    </View>                
  </View>
);

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: Tab,
      navigationOptions: {
        drawerIcon: ({focused, tintColor}) => {
          return <Icon type='font-awesome' name='home' color={focused?tintColor:'#007cca'}  size={30} />
        }
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        drawerIcon: ({focused, tintColor}) => {
          return <Icon type='evilicon' name='bell' color={focused?tintColor:'#007cca'}  size={40} />
        }
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        drawerIcon: ({focused, tintColor}) => {
          return <Image source={require('./asset/image/contactUs.png')} tintColor={focused?tintColor:'#007cca'} resizeMode='stretch' style={{width:20, height:33}} />
        },
        drawerLabel: 'Contact Us'
      },
    }
  },
  {
    drawerWidth: Dimensions.get('window').width,
    drawerBackgroundColor: 'red',
    headerMode: 'float',
    contentComponent: customDrawerContent,
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#007cca',
      inactiveTintColor: '#7f7f7f',
      itemStyle: {
        height: 40,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#7f7f7f',
      },
      itemsContainerStyle: {
        paddingTop: 0,
      },
      iconContainerStyle: {
        width: 40
      }
    }
  }
)

export default class App extends Component {
  render() {
    return (
      <Drawer/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#F9F9F9",
      flex:1,
  },
  drawerheaderTilte:{
      flex: 8,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',        
  },
  drawerheader: { 
    flexDirection: 'row', 
    backgroundColor:'#F9F9F9', 
    borderBottomColor:'#7f7f7f', 
    borderBottomWidth: 1}
});
