import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import GridView from 'react-native-super-grid'
import { FilterModal } from './component'
import { SortModal } from './component'
import { Header } from '../../component'
import { connect } from 'react-redux'
import { doFilter } from '../../actions/filter'
 
class Explore extends Component {

  constructor(props){
    super(props);
    this.state={
      isFilterModalVisible: false,
      isSortModalVisible: false,
      items:[],
      search:'',
      favitemnames:[],
    }
    this.toggleFilterModal = this.toggleFilterModal.bind(this);
    this.toggleSortModal = this.toggleSortModal.bind(this);

  }
  componentDidMount(){
    this.doFilter(this.props.data,this.props.filter);
    this.findFavItem(this.props.data,this.props.favItems)
  }
  componentWillReceiveProps(nextProps){
    this.doFilter(nextProps.data,nextProps.filter);
    console.log("nextProps===>",nextProps);
    this.findFavItem(nextProps.data,nextProps.favItems);
    
  }
  doFilter(data,filter){
    var result=[];
    data.map((item)=>{
      if((item.mileage>filter.milleageMin)&&(item.mileage<filter.milleageMax)&&(item.price<filter.priceMax)&&(item.price>filter.priceMin)&&(item.year>filter.yearMin)&&
          (item.year<filter.yearMax)&&filter.cartype.includes(item.mobileType)&&filter.brand.includes(item.brand)){
            result.push(item);
          }
    })
    
    this.setState({
      items:result
    });
  }

  findFavItem(data, favData){
    var result=[];
    data.map((item)=>{
      var obj1 = favData.find(function (obj) { return obj.name == item.name; });
      if (obj1!=null) result.push(item.name)
    })
    this.setState({
      favitemnames:result
    })
  }

  toggleFilterModal(){
    this.setState({
      isFilterModalVisible: !this.state.isFilterModalVisible
    })
  }

  toggleSortModal(){
    this.setState({
      isSortModalVisible: !this.state.isSortModalVisible
    })
  }

  _renderItem = ()=>{
    var result = [];
    if(this.state.items.length==0){
      return [];
    }
    this.state.items.map((item)=>{
      var name = item.name.toLowerCase();
      var search_txt = this.state.search.toLowerCase();
      if(name.includes(search_txt))
        result.push(item);
    });
    return result;
  }

  addFavItem = (item) => {

  }

  handleChange = (query)=>{
    this.setState({
      search:query
    })
  }

  render() {
    var renderedItem = this._renderItem();
    console.log('state=====>',this.state);
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} toggleFilterModal={this.toggleFilterModal} toggleSortModal={this.toggleSortModal} handleChange = {this.handleChange} value = {this.state.search}/>
        <View style={styles.gridContainer}>
          <GridView
            itemDimension={130}
            items={renderedItem}
            style={styles.gridView}
            spacing={5}
            renderItem={item => (
            <View style={styles.itemContainer}>
              <View style={styles.itemName}>
                <Text style={{ fontSize: 12, color: '#007cca', fontWeight: '600', }}>{item.name}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={{ fontSize: 12, color: '#7f7f7f' }}>{item.year}</Text>
                <Text style={{ fontSize: 12, color: '#7f7f7f' }}>{item.mileage}</Text>
              </View>
              <View style={{ flex: 5, flexDirection: 'row' }}>
                <ImageBackground 
                  source={item.img}
                  imageStyle={{resizeMode: 'stretch'}}
                  style={styles.itemImage}
                >
                  <Icon name='star-o' type='font-awesome' size={20} color={this.state.favitemnames.includes(item.name)?'#007cca':'white'} onPress = {()=>this.addFavItem(item)}/>
                </ImageBackground>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.itemPrice}>
                  <Text style={{ fontSize: 12, color: '#ff0a0a' }}>AED {item.price}</Text>
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
        <FilterModal isFilterModalVisible={this.state.isFilterModalVisible} toggleFilterModal={this.toggleFilterModal}/>
        <SortModal isSortModalVisible={this.state.isSortModalVisible} toggleSortModal={this.toggleSortModal}/>
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

function mapStateToProps(state){
  return{
    data:state.data.data,
    filter:state.filter.filter,
    favItems:state.favItem.favItem,
    state:state
  }
}

export default connect(mapStateToProps)(Explore)
