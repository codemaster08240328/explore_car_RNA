import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'
import { Header } from 'react-native-elements'
import HeaderIcon from '../HeaderIcon'
const androidstyles = StyleSheet.create({
    container : {
        padding:10,
        height:45,
        backgroundColor:'#007cca',
    }

});
const iosstyles = StyleSheet.create({
    container:{
        padding:10,
        paddingTop:20,
        height:55,
        backgroundColor:'#007cca',
    }
});

const ModalHeader = ({title, leftIconName, rightIconText, leftIconType, toggleModal}) => {

    return (
        <Header  
          leftComponent = { <HeaderIcon color='white' size={20} name={leftIconName} type={leftIconType} onPress={toggleModal}/> }      
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 22 } }}
          rightComponent={<Text style={{fontSize:16, color:'white'}}>{rightIconText}</Text>}
          outerContainerStyles={(Platform.OS==='ios')?iosstyles.container:androidstyles.container}
          innerContainerStyles={{ alignItems: 'center' }}
        />
    );
};

export default ModalHeader;


