import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import {StyleSheet, Platform} from 'react-native'
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

const CommonHeader = ({title, leftIconName, rightIconName, leftIconType, rightIconType, navigation}) => {

    return (
        <Header  
          leftComponent = { <HeaderIcon color='white' size={20} name={leftIconName} type={leftIconType} onPress={ () => navigation.goBack() }/> }      
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 22 } }}
          rightComponent={ <HeaderIcon color='white' size={30} name={rightIconName} type={rightIconType} onPress={ () => navigation.openDrawer() }/> }
          outerContainerStyles={(Platform.OS==="ios")?iosstyles.container:androidstyles.container}
          innerContainerStyles={{ alignItems: 'center' }}
        />
    );
};

export default CommonHeader;


