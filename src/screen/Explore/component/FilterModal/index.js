import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import Modal from 'react-native-modal'
import { ModalHeader } from '../../../../component'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { connect } from 'react-redux';
import { setFilterOptions } from '../../../../actions/filter';

class FilterModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            multiYearValue: [2006, 2018],
            multiMileageValue: [0, 10],
            multiPriceValue: [0, 200],
            mobileTypeSedan: true,
            mobileTypeRoadster: true,
            mobileTypeHatchBack: true,
            mobileTypeSportCar: true,
            mobileTypeCoupe: true,
            mobileTypePickUp: true,
            mobileTypeCabriolet: true,
            mobileTypeMinivan: true,
            mobileNissan:true,
            mobileMazda:true,
            mobileToyota:true,
            mobileHonda:true,
        }
        this.multiYearValuesChange = this.multiYearValuesChange.bind(this);
        this.multiMileageValuesChange = this.multiMileageValuesChange.bind(this);
        this.multiPriceValuesChange = this.multiPriceValuesChange.bind(this);
        this.handleToggleMobileType = this.handleToggleMobileType.bind(this);
    }

    handleToggleMobileType(type){
        switch (type){
            case 'mobileTypeSedan':
                this.setState({mobileTypeSedan: !this.state.mobileTypeSedan});
                break;
            case 'mobileTypeRoadster':
                this.setState({mobileTypeRoadster: !this.state.mobileTypeRoadster});
                break;
            case 'mobileTypeHatchBack':
                this.setState({mobileTypeHatchBack: !this.state.mobileTypeHatchBack});
                break;
            case 'mobileTypeSportCar':
                this.setState({mobileTypeSportCar: !this.state.mobileTypeSportCar});
                break;
            case 'mobileTypeMinivan':
                this.setState({mobileTypeMinivan: !this.state.mobileTypeMinivan});
                break;
            case 'mobileTypeCoupe':
                this.setState({mobileTypeCoupe: !this.state.mobileTypeCoupe});
                break;
            case 'mobileTypePickUp':
                this.setState({mobileTypePickUp: !this.state.mobileTypePickUp});
                break;
            case 'mobileTypeCabriolet':
                this.setState({mobileTypeCabriolet: !this.state.mobileTypeCabriolet});
                break;
        }
    } 
    handleToggleBrand(brand){
        switch (brand){
            case 'mazda':
                this.setState({mobileMazda: !this.state.mobileMazda});
                break;
            case 'nissan':
                this.setState({mobileNissan: !this.state.mobileNissan});
                break;
            case 'toyota':
                this.setState({mobileToyota: !this.state.mobileToyota});
                break;
            case 'honda':
                this.setState({mobileHonda: !this.state.mobileHonda});
                break;
        }
    } 

    multiYearValuesChange = (values) => {
        this.setState({
            multiYearValue: values,
        });
    }

    multiMileageValuesChange = (values) => {
        this.setState({
            multiMileageValue: values,
        });
    }

    multiPriceValuesChange = (values) => {
        this.setState({
            multiPriceValue: values,
        });
    }

    applyBtnHandle = () => {
        var filter = {
            yearMin:this.state.multiYearValue[0],
            yearMax:this.state.multiYearValue[1],
            milleageMin:this.state.multiMileageValue[0]*1000,
            milleageMax:this.state.multiMileageValue[1]*1000,
            priceMin:this.state.multiPriceValue[0]*1000,
            priceMax:this.state.multiPriceValue[1]*1000,
            cartype:[],
            brand:[],
        }
        if(this.state.mobileTypeMinivan) filter.cartype.push('minivan');
        if(this.state.mobileTypeSedan) filter.cartype.push('sedan');
        if(this.state.mobileTypePickUp) filter.cartype.push('pickup');
        if(this.state.mobileTypeCoupe) filter.cartype.push('coupe');
        if(this.state.mobileTypeSportCar) filter.cartype.push('sport car');
        if(this.state.mobileTypeHatchBack) filter.cartype.push('hatchback');
        if(this.state.mobileTypeRoadster) filter.cartype.push('roadster');
        if(this.state.mobileTypeCabriolet) filter.cartype.push('cabriolet');

        if(this.state.mobileNissan) filter.brand.push('nissan');
        if(this.state.mobileMazda) filter.brand.push('mazda');
        if(this.state.mobileToyota) filter.brand.push('toyota');
        if(this.state.mobileHonda) filter.brand.push('honda');

        this.props.dispatch(setFilterOptions(filter));
        this.props.toggleFilterModal();

    }

    render() {
        return (
            <Modal 
                isVisible={this.props.isFilterModalVisible} 
                backdropColor='#f3f3f3' 
                backdropOpacity={1}
                avoidKeyboard={true}
                style={{margin: 0}}
            >
                <View style={{ flex: 1 }}>
                    <ModalHeader title='Filters' rightIconText='Clear' leftIconName='arrow-left' leftIconType='feather' toggleModal={this.props.toggleFilterModal}/>
                    <View style={{flex:1 }}>
                        <View style={{flex:4, padding: 10}}>
                            <View style={{flex:1}}>
                                <View style={{flex:2}}><Text style={styles.sliderTitle}>Year</Text></View>
                                <View style={styles.sliderValue}>
                                    <Text style={styles.sliderTitle}>{this.state.multiYearValue[0]}-{this.state.multiYearValue[1]}</Text>
                                </View>
                                <View style={styles.sliderContainer}>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>LESS</Text>
                                    </View>
                                    <View style={styles.slider}>
                                        <MultiSlider
                                            values={[this.state.multiYearValue[0], this.state.multiYearValue[1]]}
                                            sliderLength={240}
                                            onValuesChange={this.multiYearValuesChange}
                                            min={2006}
                                            max={2018}
                                            step={1}
                                            allowOverlap={false}
                                            containerStyle={styles.sliderContainerStyle}
                                            trackStyle={{height: 10, borderRadius: 5}}
                                            selectedStyle={{backgroundColor:'#007cca'}}
                                            markerStyle={styles.markerStyle}
                                        />
                                    </View>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>MORE</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, paddingTop: 10}}>
                                <View style={{flex:2}}><Text style={styles.sliderTitle}>Mileage</Text></View>
                                <View style={styles.sliderValue}>
                                    <Text style={styles.sliderTitle}>{this.state.multiMileageValue[0]}-{this.state.multiMileageValue[1]}K + KM</Text>
                                </View>
                                <View style={styles.sliderContainer}>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>LESS</Text>
                                    </View>
                                    <View style={styles.slider}>
                                        <MultiSlider
                                            values={[this.state.multiMileageValue[0], this.state.multiMileageValue[1]]}
                                            sliderLength={240}
                                            onValuesChange={this.multiMileageValuesChange}
                                            min={0}
                                            max={10}
                                            step={1}
                                            allowOverlap={false}
                                            containerStyle={styles.sliderContainerStyle}
                                            trackStyle={{height: 10, borderRadius: 5}}
                                            selectedStyle={{backgroundColor:'#007cca'}}
                                            markerStyle={styles.markerStyle}
                                        />
                                    </View>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>MORE</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, paddingTop: 10}}>
                                <View style={{flex:2}}><Text style={styles.sliderTitle}>Price</Text></View>
                                <View style={styles.sliderValue}>
                                    <Text style={styles.sliderTitle}>AED {this.state.multiPriceValue[0]} - {this.state.multiPriceValue[1]}K+</Text>
                                </View>
                                <View style={styles.sliderContainer}>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>LESS</Text>
                                    </View>
                                    <View style={styles.slider}>
                                        <MultiSlider
                                            values={[this.state.multiPriceValue[0], this.state.multiPriceValue[1]]}
                                            sliderLength={240}
                                            onValuesChange={this.multiPriceValuesChange}
                                            min={0}
                                            max={200}
                                            step={1}
                                            allowOverlap={false}
                                            containerStyle={styles.sliderContainerStyle}
                                            trackStyle={{height: 10, borderRadius: 5}}
                                            selectedStyle={{backgroundColor:'#007cca'}}
                                            markerStyle={styles.markerStyle}
                                        />
                                    </View>
                                    <View style={styles.sliderText}>
                                        <Text style={{ fontSize: 10 }}>MORE</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3, padding: 10}}>
                            <View style={{flex:2, justifyContent: 'center'}}>
                                <Text style={styles.sliderTitle}>AutoMobile By Type</Text>    
                            </View>
                            <View style={{flex:3, flexDirection: 'row'}}>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeSedan')}>
                                            <Image  
                                                source={require('../../../../asset/image/car/1.png')}
                                                style={styles.mobileTypeImage}
                                                tintColor={this.state.mobileTypeSedan?'#007cca':'#585858'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Sedan</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeRoadster')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/2.png')}
                                                style={styles.mobileTypeImage} 
                                                tintColor={this.state.mobileTypeRoadster?'#007cca':'#585858'}
                                            />                                      
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Roadster</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeHatchBack')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/3.png')}
                                                style={styles.mobileTypeImage}    
                                                tintColor={this.state.mobileTypeHatchBack?'#007cca':'#585858'}  
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>HatchBack</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeSportCar')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/4.png')}
                                                style={styles.mobileTypeImage} 
                                                tintColor={this.state.mobileTypeSportCar?'#007cca':'#585858'} 
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Sport Car</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:3, flexDirection: 'row'}}>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeCoupe')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/5.png')}
                                                style={styles.mobileTypeImage}
                                                tintColor={this.state.mobileTypeCoupe?'#007cca':'#585858'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Coupe</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypePickUp')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/6.png')}
                                                style={styles.mobileTypeImage} 
                                                tintColor={this.state.mobileTypePickUp?'#007cca':'#585858'}                                       />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>PickUp</Text>
                                    </View></View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeCabriolet')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/7.png')}
                                                style={styles.mobileTypeImage}   
                                                tintColor={this.state.mobileTypeCabriolet?'#007cca':'#585858'}                                     />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Cabriolet</Text>
                                    </View></View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2}}>
                                        <TouchableOpacity style={{flex:1}} onPress={() => this.handleToggleMobileType('mobileTypeMinivan')}>
                                            <Image 
                                                source={require('../../../../asset/image/car/8.png')}
                                                style={styles.mobileTypeImage}  
                                                tintColor={this.state.mobileTypeMinivan?'#007cca':'#585858'}                                      />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Minivan</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:2, padding: 10}}>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text style={styles.sliderTitle}>AutoMobile By Type</Text>    
                            </View>
                            <View style={{flex:2, flexDirection: 'row'}}>
                                <View style={{flex:1}}>
                                    <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                                        <TouchableOpacity style={{flex:1,flexDirection:'row', alignItems: 'center'}} onPress={() => this.handleToggleMobileType('mobileTypeSedan')}>
                                            <Image  
                                                source={require('../../../../asset/image/Logo/nissan.png')}
                                                style={styles.logoTypeImage}
                                                // tintColor={this.state.mobileTypeSedan?'#007cca':'#585858'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Sedan</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                                        <TouchableOpacity style={{flex:1,flexDirection:'row', alignItems: 'center'}} onPress={() => this.handleToggleMobileType('mobileTypeRoadster')}>
                                            <Image 
                                                source={require('../../../../asset/image/Logo/mazda.png')}
                                                style={styles.logoTypeImage} 
                                                // tintColor={this.state.mobileTypeRoadster?'#007cca':'#585858'}
                                            />                                      
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Roadster</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                                        <TouchableOpacity style={{flex:1,flexDirection:'row', alignItems: 'center'}} onPress={() => this.handleToggleMobileType('mobileTypeHatchBack')}>
                                            <Image 
                                                source={require('../../../../asset/image/Logo/toyota.png')}
                                                style={styles.logoTypeImage}    
                                                // tintColor={this.state.mobileTypeHatchBack?'#007cca':'#585858'}  
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>HatchBack</Text>
                                    </View>
                                </View>
                                <View style={{flex:1}}>
                                    <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                                        <TouchableOpacity style={{flex:1, flexDirection:'row', alignItems: 'center'}} onPress={() => this.handleToggleMobileType('mobileTypeSportCar')}>
                                            <Image 
                                                source={require('../../../../asset/image/Logo/honda.png')}
                                                style={styles.logoTypeImage} 
                                                // tintColor={this.state.mobileTypeSportCar?'#007cca':'#585858'} 
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={styles.sliderTitle}>Sport Car</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{flex:1}}>
                            <TouchableOpacity style={{flex:1, backgroundColor: '#007cca',alignItems:'center', justifyContent: 'center' }} onPress={this.applyBtnHandle}>
                                <Text style={{fontSize:20, color: 'white'}}>Apply Filters</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    sliderTitle:{
        color:'#007cca', 
        fontWeight:'bold'        
    },
    sliderValue: {
        flex:3, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    sliderContainer: {
        flex: 4, 
        borderColor:'#d5d5d5', 
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    sliderText: {
        display: 'flex',
        justifyContent:'center', 
        alignItems:'center', 
        flex: 1
    },
    slider: {
        flex: 6,
        display: 'flex',
    },
    sliderContainerStyle: {
        flex:1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    markerStyle: {
        borderWidth: 1, 
        borderColor: '#9a9a9a', 
        marginTop:10,
        height:20, 
        width: 20, 
        backgroundColor: '#c2c4c5'
    },
    mobileTypeImage: {
        flex: 1, 
        width:'80%', 
        resizeMode:'stretch',
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        marginBottom: 0,
    },
    logoTypeImage: {
        width:'40%', 
        height: '65%',
        resizeMode:'stretch',
    }
})

function mapStateToProps(state){
    return{
        state:state
    }
}

export default connect(mapStateToProps)(FilterModal);