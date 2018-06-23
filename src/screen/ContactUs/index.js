import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { CommonHeader } from '../../component'

export default class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonHeader title='Contact Us' rightIconName='menu' navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  }
})
