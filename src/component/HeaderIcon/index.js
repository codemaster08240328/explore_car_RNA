import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const HeaderIcon = ({name, onPress, color, type}) => {
    return (
        <TouchableOpacity  onPress={onPress}>
            <Icon name={name} color={color} type={type}/>
        </TouchableOpacity>
    );
};

export default HeaderIcon;

