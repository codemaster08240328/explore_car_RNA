import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { Icon, Button } from 'react-native-elements';
import GridView from 'react-native-super-grid';

import { Header } from '../../component';

export default class Explore extends Component {

  constructor(props){
    super(props);


    this.handleDrawer = this.handleDrawer.bind(this);
    this.movePrevScreen = this.movePrevScreen.bind(this);
  }
  
  handleDrawer(){
    this.props.navigation.openDrawer();
  }

  movePrevScreen(){
    this.props.navigation.goBack();
  }

  render() {
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.gridContainer}>
          <GridView
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={item => (
            <View style={styles.itemContainer}>
              <View style={styles.itemName}>
                <Text style={{ fontSize: 12, color: '#007cca', fontWeight: '600', }}>{item.name}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={{ fontSize: 12, color: '#7f7f7f' }}>2018</Text>
                <Text style={{ fontSize: 12, color: '#7f7f7f' }}>7140km</Text>
              </View>
              <View style={{ flex: 5, flexDirection: 'row' }}>
                <ImageBackground 
                  source={require('../../asset/image/car.png')}
                  imageStyle={{resizeMode: 'stretch'}}
                  style={styles.itemImage}
                >
                  <Icon name='md-heart-outline' type='ionicon' size={20} color='white'/>
                </ImageBackground>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.itemPrice}>
                  <Text style={{ fontSize: 12, color: '#ff0a0a' }}>AED 76,670</Text>
                  <Button title='Detail' backgroundColor='#007cca' 
                          buttonStyle={{height:2, padding:7}} 
                          containerViewStyle={{marginRight: 0}} 
                          textStyle={{fontSize: 10}}
                          onPress={() => this.props.navigation.navigate('Detail',{ name: item.name})}
                  />
                </View>
              </View>
            </View>
            )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0'
  },
  gridContainer: {
    flex: 1,
    marginBottom: 10,
  },
  gridView: {
    flex: 1
  },
  itemContainer: {
    paddingTop: 5,
    paddingBottom: 5,    
    height: 150,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c6c6c6',
  },
  itemName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemInfo:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  itemImage: {
    flex:1, 
    height: '100%',
    padding: 5,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  itemPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
  }
})
