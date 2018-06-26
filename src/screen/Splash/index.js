import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Splash extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f0f0f0'}}>
        <View style={styles.container}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: '40%',
    }
})
