import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { ModalHeader } from '../../../../component'

export default class SortModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            yearSort: false,
            mileageSort: false,
            priceSort: false
        }
        this.toggleYear = this.toggleYear.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
        this.toggleMileage = this.toggleMileage.bind(this);
    }

    toggleYear(type){
        switch (type){
            case 'low':
                this.setState({
                    yearSort: false
                });
                break;
            case 'hight':
                this.setState({
                    yearSort: true
                });
                break; 
            default:
                break;
        }
    }

    toggleMileage(type){
        switch (type){
            case 'low':
                this.setState({
                    mileageSort: false
                });
                break;
            case 'hight':
                this.setState({
                    mileageSort: true
                });
                break; 
            default:
                break;
        }
    }

    togglePrice(type){
        switch (type){
            case 'low':
                this.setState({
                    priceSort: false
                });
                break;
            case 'hight':
                this.setState({
                    priceSort: true
                });
                break; 
            default:
                break;
        }
    }

    render() {
        return (
            <Modal 
                isVisible={this.props.isSortModalVisible} 
                backdropColor='#f3f3f3' 
                backdropOpacity={1}
                avoidKeyboard={true}
                style={{margin: 0}}
            >
                <View style={{ flex: 1 }}>
                    <ModalHeader title='Sort' rightIconText='Default' leftIconName='arrow-left' leftIconType='feather' toggleModal={this.props.toggleSortModal}/>
                    <View style={{ flex:1}}>
                        <View style={{flex:6, paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{flex:1, justifyContent: 'flex-end'}}>
                                <View style={{height: '70%'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: '#007cca', fontWeight: 'bold'}}>
                                            Year
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', borderWidth: 2, borderColor: '#0070b7'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.toggleYear('low')}>
                                            <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center', backgroundColor: this.state.yearSort?'white':'#007cca'}}>
                                                <Text style={{color: this.state.yearSort?'#007cca':'white', fontSize: 12, fontWeight: 'bold'}}>
                                                    Low To Hight
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.toggleYear('hight')}>
                                            <View style={{flex: 1, justifyContent: 'center', backgroundColor: this.state.yearSort?'#007cca':'white', alignItems: 'center'}}>
                                                <Text style={{color: this.state.yearSort?'white':'#007cca', fontSize: 12, fontWeight: 'bold'}}>
                                                    Hight To Low
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, justifyContent: 'flex-end'}}>
                                <View style={{height: '70%'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: '#007cca', fontWeight: 'bold'}}>
                                            Mileage
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', borderWidth: 2, borderColor: '#0070b7'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.toggleMileage('low')}>
                                            <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center', backgroundColor: this.state.mileageSort?'white':'#007cca'}}>
                                                <Text style={{color: this.state.mileageSort?'#007cca':'white', fontSize: 12, fontWeight: 'bold'}}>
                                                    Low To Hight
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.toggleMileage('hight')}>
                                            <View style={{flex: 1, justifyContent: 'center', backgroundColor: this.state.mileageSort?'#007cca':'white', alignItems: 'center'}}>
                                                <Text style={{color: this.state.mileageSort?'white':'#007cca', fontSize: 12, fontWeight: 'bold'}}>
                                                    Hight To Low
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, justifyContent: 'flex-end'}}>
                                <View style={{height: '70%'}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{color: '#007cca', fontWeight: 'bold'}}>
                                            Price
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', borderWidth: 2, borderColor: '#0070b7'}}>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.togglePrice('low')}>
                                            <View style={{flex: 1, paddingLeft: 20, justifyContent: 'center', backgroundColor: this.state.priceSort?'white':'#007cca'}}>
                                                <Text style={{color: this.state.priceSort?'#007cca':'white', fontSize: 12, fontWeight: 'bold'}}>
                                                    Low To Hight
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flex: 1}} onPress={()=>this.togglePrice('hight')}>
                                            <View style={{flex: 1, justifyContent: 'center', backgroundColor: this.state.priceSort?'#007cca':'white', alignItems: 'center'}}>
                                                <Text style={{color: this.state.priceSort?'white':'#007cca', fontSize: 12, fontWeight: 'bold'}}>
                                                    Hight To Low
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:3}}></View>
                        <View style={{flex:1}}>
                            <TouchableOpacity style={{flex:1, backgroundColor: '#007cca',alignItems:'center', justifyContent: 'center', marginTop: 5 }} onPress={()=>alert('asdfasdfa')}>
                                <Text style={{fontSize:20, color: 'white'}}>Apply Sort</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({})
