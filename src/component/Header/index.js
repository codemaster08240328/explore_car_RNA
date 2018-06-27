import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform, } from 'react-native'
import { Header as Head } from 'react-native-elements'
import { SearchBar } from './component'

export default class Header extends Component {
  render() {
    return (
      <Head
        leftComponent={{ icon: 'filter', color: '#fff', type: 'font-awesome', size: 30, onPress:this.props.toggleFilterModal }}
        centerComponent={<SearchBar value = {this.props.value} handleChange = {this.props.handleChange}/>}
        outerContainerStyles={(Platform.OS === 'ios')?iosstyles.container:style.container}
        rightComponent={<Image source={require('../../asset/image/menu-arrow.png')}  style={styles.headerMenu} onPress={this.props.toggleSortModal}/> }
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
  },
  container:{
    padding: 10, 
    height: 45, 
    backgroundColor: '#007cca' 
  }
});

const iosstyles = StyleSheet.create({
  container:{
    padding: 10, 
    height: 60, 
    backgroundColor: '#007cca',
    paddingTop:25,
    
  }
})