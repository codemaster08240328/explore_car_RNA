import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header as Head } from 'react-native-elements'
import { SearchBar } from './component'

export default class Header extends Component {
  render() {
    return (
      <Head
        leftComponent={{ icon: 'filter', color: '#fff', type: 'font-awesome' }}
        centerComponent={<SearchBar/>}
        rightComponent={{ icon: 'menu', color: 'white', size: 25 }}
        outerContainerStyles={{ padding: 10, height: 40 }}
        innerContainerStyles={{ alignItems: 'center' }}
        statusBarProps={{ barStyle: 'light-content' }}
      />
    )
  }
}

