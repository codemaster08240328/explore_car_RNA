import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Header as Head } from 'react-native-elements'
import { SearchBar } from './component'

export default class Header extends Component {
  render() {
    return (
      <Head
        leftComponent={{ icon: 'filter', color: '#fff', type: 'font-awesome', size: 30, onPress:this.props.toggleModal }}
        centerComponent={<SearchBar/>}
        rightComponent={<Image source={require('../../asset/image/menu-arrow.png')}  style={styles.headerMenu}/>}
        outerContainerStyles={{ padding: 10, height: 45, backgroundColor: '#007cca' }}
        innerContainerStyles={{ alignItems: 'center' }}
        statusBarProps={{ barStyle: 'light-content' }}
        
      />
    )
  }
}

const styles = StyleSheet.create({
  headerMenu: {
    width: 35,
    height: 25
  }
});