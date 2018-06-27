import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'
import { getDummyData } from '../../actions/getData'
import { setFilterOptions } from '../../actions/filter'


class Splash extends Component {
  
    componentDidMount(){
        this.props.dispatch(setFilterOptions(null));
        this.props.dispatch(getDummyData());
        setTimeout(()=>{
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Drawer'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        },3000)
    }

    render() {
        return (
        <View style={{flex:1, backgroundColor: '#ddd9d8'}}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../asset/image/logo.png')} style={styles.logo}/>               
                </View>                              
                <View style={{flex:1}}>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={styles.topText}>
                            leading exporters of used cars{"\n"}from Japan to U A E
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={styles.bottomText}>
                            HONEY MOTORS
                        </Text>
                    </View>    
                </View>          
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '40%',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '100%',
        width: '30%',
        resizeMode: 'stretch'
    },
    topText: {
        color: '#007bc9', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bottomText: {
        color: 'white', 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10    
    }
});

const mapStateToProps = (state)=>{
    return {
        state:state
    }
}
export default connect(mapStateToProps)(Splash)
