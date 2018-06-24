import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import HeaderIcon from '../HeaderIcon'

const CommonHeader = ({title, leftIconName, rightIconName, leftIconType, rightIconType, navigation}) => {

    return (
        <Header  
          leftComponent = { <HeaderIcon color='white' name={leftIconName} type={leftIconType} onPress={ () => navigation.goBack() }/> }      
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 16 } }}
          rightComponent={ <HeaderIcon color='white' name={rightIconName} type={rightIconType} onPress={ () => navigation.openDrawer() }/> }
          outerContainerStyles={{ padding: 10, height: 50 }}
          innerContainerStyles={{ alignItems: 'center' }}
        />
    );
};

export default CommonHeader;


