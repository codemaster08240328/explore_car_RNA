import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Header as Head } from 'react-native-elements'
import { SearchBar } from './component'

export default class Header extends Component {
  render() {
    return (
      <Head
        leftComponent={{ icon: 'filter', color: '#fff', type: 'font-awesome' }}
        centerComponent={<SearchBar/>}
        rightComponent={<Image source={require('../../asset/image/menu-arrow.png')} style={styles.headerMenu}/>}
        outerContainerStyles={{ padding: 10, height: 40 }}
        innerContainerStyles={{ alignItems: 'center' }}
        statusBarProps={{ barStyle: 'light-content' }}
      />
    )
  }
}

const styles = StyleSheet.create({
  headerMenu: {
    width: 30,
    height: 20
  }
});