import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import HeaderIcon from '../HeaderIcon'

const CommonHeader = ({title, leftIconName, rightIconName, leftIconType, rightIconType, navigation}) => {

    return (
        <Header  
          leftComponent = { <HeaderIcon color='white' size={20} name={leftIconName} type={leftIconType} onPress={ () => navigation.goBack() }/> }      
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 22 } }}
          rightComponent={ <HeaderIcon color='white' size={30} name={rightIconName} type={rightIconType} onPress={ () => navigation.openDrawer() }/> }
          outerContainerStyles={{ padding: 10, height: 45, backgroundColor: '#007cca' }}
          innerContainerStyles={{ alignItems: 'center' }}
        />
    );
};

export default CommonHeader;


