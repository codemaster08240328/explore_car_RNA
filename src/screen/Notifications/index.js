import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { CommonHeader } from '../../component'

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonHeader title='Notifications' rightIconName='menu' navigation={this.props.navigation}/>
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
