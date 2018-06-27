import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { List, ListItem  } from 'react-native-elements'
import { CommonHeader } from '../../component'

export default class Notifications extends Component {

  renderItem =({item}) => {
    <View style={styles.content}>
      <Text style={styles.title}>
        asdfasdfafasdfasdf
      </Text>
      <Text style={styles.text}>
        {item.content}
      </Text>
    </View>
  }

  render() {

    const items = [
       { title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }
      ,{ title: 'TURQUOISE', content: 'we send weekly notification about th top cars added to our inventory. You can change the this setting to turn there notifications on/off' }

    ];

    return (
      <View style={styles.container}>
        <CommonHeader title='Notifications' rightIconName='menu' navigation={this.props.navigation}/>
        <View style={{flex: 1}}>
            <FlatList
              data={items}
              renderItem={({item}) => 
                <View style={styles.content}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.text}>
                    {item.content}
                  </Text>
                </View>
              }
              keyExtractor={item => item.title}
            />
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
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderColor: '#acacac'
  },
  title: {
    color: '#007cca',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  text: {
    fontSize: 12
  }
})
