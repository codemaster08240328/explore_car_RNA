import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import HeaderIcon from '../HeaderIcon'

const ModalHeader = ({title, leftIconName, rightIconText, leftIconType, toggleModal}) => {

    return (
        <Header  
          leftComponent = { <HeaderIcon color='white' size={20} name={leftIconName} type={leftIconType} onPress={toggleModal}/> }      
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 22 } }}
          rightComponent={<Text style={{fontSize:16, color:'white'}}>{rightIconText}</Text>}
          outerContainerStyles={{ padding: 10, height: 45, backgroundColor: '#007cca' }}
          innerContainerStyles={{ alignItems: 'center' }}
        />
    );
};

export default ModalHeader;


