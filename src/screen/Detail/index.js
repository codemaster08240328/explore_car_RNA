import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'
import { CommonHeader } from '../../component'

export default class Notifications extends Component {

  constructor(props){
    super(props);


    this.handleDrawer = this.handleDrawer.bind(this);
  }
  
  handleDrawer(){
    this.props.navigation.goBack();
  }

  render() {
    const name = this.props.navigation.getParam('name', 'Peter');
    return (
      <View style={styles.container}>
        <CommonHeader title={name} leftIconName='arrow-left' leftIconType='feather' rightIconName='menu' navigation={this.props.navigation}/>
        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'column'}}>
          <View style={{ flex: 4 }}>
            <ImageBackground 
              source={require('../../asset/image/car.png')}
              imageStyle={{resizeMode: 'stretch'}}
              style={styles.itemImage}
            >
              <View style={styles.itemImages}>
              <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
                horizontal={true}
              />
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 5, backgroundColor: 'red', marginLeft: 20, marginRight: 20 }}>
            <View>
              
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: 'green' }}>
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
  itemImages: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    height: 20,
    margin: 10
  },
  itemImage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
})
