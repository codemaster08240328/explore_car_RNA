import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  ImageBackground, 
  FlatList,
  Image,
  TouchableOpacity,
  Button, 
  ScrollView,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements'
import { CommonHeader } from '../../component'
import GridView from 'react-native-super-grid'
import CollapseView from "react-native-collapse-view";


import img2 from '../../asset/image/car2.gif'
import img3 from '../../asset/image/car3.gif'
import img4 from '../../asset/image/car4.gif'
import img5 from '../../asset/image/car5.gif'
import img from '../../asset/image/car.png'
const imgs = [img,img2,img3,img4,img5,img,img2,img3,img4,img5,img,img2,img3,img4,img5];
export default class Notifications extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectCar : 1,
      selectThumb : 0,
    }
  }
  _renderIconView = (collapse) => {
    return(
      <View style={styles.iconView}>
        <Text style = {{color:'#007cca'}}>Highlights</Text>
        <View>
          {
            collapse?
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-up"/>:
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-down"/>
          }
        </View>
      </View>
    )
  }
  _renderIconView2 = (collapse) => {
    return(
      <View style={styles.iconView}>
        <Text style = {{color:'#007cca'}}>Specifications</Text>
        <View>
          {
            collapse?
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-up"/>:
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-down"/>
          }
        </View>
      </View>
    )
  }
  _renderIconView3 = (collapse) => {
    return(
      <View style={styles.iconView}>
        <Text style = {{color:'#007cca'}}>Basic Features</Text>
        <View>
          {
            collapse?
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-up"/>:
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-down"/>
          }
        </View>
      </View>
    )
  }
  _renderIconView4 = (collapse) => {
    return(
      <View style={collapse?styles.iconView:styles.iconViewLast}>
        <Text style = {{color:'#007cca'}}>Overview of the car</Text>
        <View>
          {
            collapse?
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-up"/>:
            <Icon type = "entypo" size={20} color = "#007cca" name = "chevron-down"/>
          }
        </View>
      </View>
    )
  }
  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    )
  }

  render() {
    const name = this.props.navigation.getParam('name', 'Peter');
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
        <CommonHeader title={name} leftIconName='arrow-left' leftIconType='feather' rightIconName='menu' navigation={this.props.navigation}/>
        <View style={{ flex: 1, marginBottom: 10, flexDirection: 'column'}}>
          <View style={{ flex: 4 }}>
            <ImageBackground 
              source={imgs[this.state.selectThumb]}
              imageStyle={{resizeMode: 'stretch'}}
              style={styles.itemImage}
            >
              <View style={styles.itemImages}>
                <FlatList
                  data={imgs}
                  renderItem={({item,index}) => <TouchableOpacity onPress={()=>{this.setState({selectThumb:index})}}><Image style = {(index==this.state.selectThumb)?styles.thumimgselect:styles.thumimg} source={item}/></TouchableOpacity>}
                  horizontal={true}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={{ flex: 5,marginLeft: 20, marginRight: 20 }}>
            <View style = {{flex:1,justifyContent:'center',alignItems:'center',flexDirection:"row",paddingTop:5,paddingBottom:5,}}>
              <Text style = {{color:'#007cca',fontSize:18}}>Nissan Patrol Platinum - </Text><Text style = {{color:'red',fontSize:18}}>AED 235,000</Text>
            </View>
            <View style={{flex:8}}>
              <ScrollView>
                <CollapseView 
                  renderView={this._renderIconView}
                  renderCollapseView={this._renderCollapseView}
                /><CollapseView 
                  renderView={this._renderIconView2}
                  renderCollapseView={this._renderCollapseView}
                />
                <CollapseView 
                  renderView={this._renderIconView3}
                  renderCollapseView={this._renderCollapseView}
                />
                <CollapseView 
                  renderView={this._renderIconView4}
                  renderCollapseView={this._renderCollapseView}
                />

              </ScrollView>
              
            </View>
          </View>
          <View style={{ flex: 4 }}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}} >
              <Text style = {{color:'#007cca',fontSize:18}}>View similar used cars</Text>
            </View>
            <View style = {{flex:2}}>
              <GridView
                items={items}
                style={styles.gridView}
                spacing={5}
                horizontal={true}
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
                      <Button 
                        title='Detail' backgroundColor='#007cca' 
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
    height: 20,
    margin:20,
    alignItems:'center',
    justifyContent:'center',
  },
  itemImage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  thumimg:{
    height:20,
    width:30,
    borderWidth:1,
    borderColor:'white',
    marginRight:1,
  
  },
  thumimgselect:{
    height:20,
    width:30,
    borderWidth:1,
    borderColor:'#007cca',
    marginRight:1,
  },
  gridView: {
    flex: 3,
    padding:0,
    margin:0,
  },
  itemContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c6c6c6',
    height:'100%',

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
  },
  collapseView: {
    height:100,
  },
  iconView: {
    paddingTop:5,
    paddingBottom:5,
    borderTopWidth:1,
    borderColor:'#000',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconViewLast:{
    paddingTop:5,
    paddingBottom:5,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#000',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    height:50,
    padding: 20,
    justifyContent:'center',
    backgroundColor:'green',
  }

})
