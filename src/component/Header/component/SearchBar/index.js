import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SearchBar as Search} from 'react-native-elements'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    handleQueryChange = query =>
        this.setState(state => ({ ...state, query: query || "" }));

    handleSearchCancel = () => this.handleQueryChange("");
    handleSearchClear = () => this.handleQueryChange("");

    render() {
        return (
            <Search
                icon = {{ name: 'search', color: 'white', style: styles.searchIcon }}
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
                onChangeText={this.handleQueryChange}
                onCancel={this.handleSearchCancel}
                onClear={this.handleSearchClear}
                placeholder='Type Make Model ...'
                placeholderTextColor='#94c7e7'
                value={this.state.query}                              
            />
        )
    }
}

const styles = StyleSheet.create({
    searchIcon: {
        fontSize: 30,
        top: 0, 
        left: 225,
        color: '#94c7e7',
    },
    inputStyle: {
        backgroundColor: 'transparent',
        color: 'white',  
        margin: 0, 
        height: 30, 
        fontSize: 15 , 
        padding: 0, 
        paddingLeft: 10
    },
    containerStyle: {
        backgroundColor: 'transparent', 
        borderWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2, 
        borderColor: '#94c7e7', 
        width: 260 ,
        borderBottomColor: '#94c7e7', 
        borderTopColor: '#94c7e7', 
        borderRadius: 5
    }
})
