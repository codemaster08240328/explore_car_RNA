import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Header as Head, Icon } from 'react-native-elements'
import { SearchBar } from './component'

export default class Header extends Component {
  render() {
    return (
      <Head
        leftComponent={<TouchableOpacity onPress={this.props.toggleFilterModal}><Icon name='filter' type='font-awesome' color='white' size={30} /></TouchableOpacity>}
        centerComponent={<SearchBar/>}
        rightComponent={<TouchableOpacity onPress={this.props.toggleSortModal}><Image source={require('../../asset/image/menu-arrow.png')}  style={styles.headerMenu} onPress={this.props.toggleSortModal}/></TouchableOpacity> }
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
