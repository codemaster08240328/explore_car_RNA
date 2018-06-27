import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { CommonHeader } from '../../component'

export default class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonHeader title='Contact Us' rightIconName='menu' navigation={this.props.navigation}/>
        <View style={{flex: 1}}>
          <View style={{flex: 2, paddingLeft: 30, paddingRight: 20}}>
            <View style={{flex: 1, paddingTop: 20}}>
              <Text style={styles.title}>Anything on your Mind? Just reach</Text>
              <Text style={styles.text}>Honey Motors Support team is available 10am-8pm throughout the week</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Dubai Office</Text>
              <Text style={styles.subTitle}>Honey Motors FZD</Text>
              <Text style={styles.text}>Ducamz,Al-Awir showroom No.136 A-Block-</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>P.O.Box: </Text>63295 Dubai U.A.E</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>Telephone: </Text>00971-4-3338640</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>Contact Person: </Text>Ali</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Japan Office</Text>
              <Text style={styles.subTitle}>Honey Motors FZD</Text>
              <Text style={styles.text}>Ducamz,Al-Awir showroom No.136 A-Block-</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>P.O.Box: </Text>63295 Dubai U.A.E</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>Telephone: </Text>00971-4-3338640</Text>
              <Text style={styles.text}><Text style={styles.subTitle}>Contact Person: </Text>Ali</Text>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'blue'}}>
          
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  content: {
    flex: 2,
    paddingTop: 10,
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
    color: '#007cca',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: '#007cca',
    fontWeight: 'bold'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12
  }
})
