import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'

export default class PhoneModal extends Component {

    render() {
        return (
            <Modal 
                isVisible={this.props.isPhoneModalVisible} 
                backdropColor='#f3f3f3' 
                backdropOpacity={0.7}
                avoidKeyboard={true}
                style={{margin: 20, backgroundColor: 'red'}}
            >
                <View style={{height: '30%', backgroundColor: 'red'}}>
                    
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({})
