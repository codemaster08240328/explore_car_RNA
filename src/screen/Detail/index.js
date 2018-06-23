import React, { Component } from 'react'
import { Text, StyleSheet, View,  } from 'react-native'
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'

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
        <Header        
          leftComponent={<Icon name='arrow-left' type='feather' color='white' underlayColor='#64b5f6' onPress={this.handleDrawer}/>}
          centerComponent={{ text: name, style: { color: '#fff', fontSize: 16 } }}
          rightComponent={<Icon name='menu' color='white' onPress={() => {this.props.navigation.openDrawer();}}/>}
          outerContainerStyles={{ padding: 10, height: 40 }}
          innerContainerStyles={{ alignItems: 'center' }}
        />
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
