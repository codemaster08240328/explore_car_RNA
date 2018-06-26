import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'
import { ModalHeader } from '../../../../component'

export default class index extends Component {
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
                <View style={{flex:1 }}>
                    
                </View>
            </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({})
