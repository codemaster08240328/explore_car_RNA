import React from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements'


export default class DrawerLayout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', borderColor:"#EFEFEF", backgroundColor:"#F9F9F9", borderBottomWidth: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Icon iconStyle={styles.headerIcon} name='close' type='material-community' size={25} />                
                    </View>
                    <View style = {styles.drawheader}>    
                        <Text style={{ fontSize:17 }}>Menu</Text>                      
                    </View>            
                    <View style={{flex: 1}}></View>        
                </View>
                <View style = {styles.drawbody}>
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Notifications</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Sell Car</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>  
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Car Valuator</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>  
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Blog-Car Talks</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>  
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Invite Friends</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Contact Us</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>  
                    <View style={styles.item}>
                        <Text style={{ fontSize:17 }}>Feedback</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../../asset/image/filter.png')}
                        />
                    </View>                                
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F9F9F9",
        flex:1,
    },
    headerIcon: {
    },
    drawheader:{
        flex: 8,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    drawbody:{
        
    },
    item:{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor:"#EFEFEF"
    },
    itemImage: {
        width: 20,
        height: 20,
        tintColor: '#007cca'
    }
  
  });