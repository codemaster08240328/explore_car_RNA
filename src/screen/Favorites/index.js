import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Icon, Button } from 'react-native-elements';
import GridView from 'react-native-super-grid';

import { CommonHeader } from '../../component';
import { HeaderIcon } from '../../component';
import { connect } from 'react-redux';

class Explore extends Component {

  constructor(props){
    super(props);
    this.state = {
      items:this.props.favItems
    }


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
        <CommonHeader title='My Favorites'  rightIconName='menu' navigation={this.props.navigation}/>
        <View style={styles.gridContainer}>
          <GridView
            itemDimension={250}
            items={this.state.items}
            style={styles.gridView}
            spacing={0}
            renderItem={item => (
            <View style={styles.itemContainer}>              
              <View style={{ flex: 10 }}>     
                <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('Detail',{ name: item.name})}>        
                  <ImageBackground 
                    source={item.img}
                    imageStyle={{resizeMode: 'stretch'}}
                    style={styles.itemImage}
                  >
                    <View style={styles.itemImageLabel}>
                      <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
                        {item.name}
                      </Text>
                      <HeaderIcon name='star-o' type='font-awesome' size={15} color='#007cca'/>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3 }}>
                <View style={styles.itemDetail}>
                  <Text style={{ fontSize: 12, color: '#ff0000', fontWeight: 'bold' }}>AED {item.price}</Text>
                  <Text style={{ fontSize: 12, color: '#1676a6', fontWeight: 'bold' }}>{item.mileage} KM</Text>
                </View>
                <View style={{flex:1,padding:5}}>
                  <Text style={{color: '#7f7f7f', fontSize: 12}}>
                  you liked this car on {item.date}
                  </Text>
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
    marginBottom: 10
  },
  gridView: {
    flex: 1
  },
  itemContainer: {
    marginTop: 5,
    paddingBottom: 5,    
    height: 150,
    backgroundColor: '#f0f0f0',
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
    display: 'flex',
    justifyContent: 'flex-end'
  },
  itemDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
  },
  itemImageLabel: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    height: 25,
    backgroundColor: 'black',
    opacity: 0.9,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

function mapStateToProps(state){
  return {
    favItems:state.favItem.favItem
  }
}

export default connect(mapStateToProps)(Explore)
