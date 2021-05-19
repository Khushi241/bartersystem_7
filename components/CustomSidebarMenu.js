import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class SettingScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                   <DrawerItems {...this.props} />
            <View styles={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                <TouchableOpacity
                style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
                 onPress={()=>{
                 this.props.navigation.navigate('WelcomeScreen')
                 firebase.auth().signOut()
                 }}>
                   <Text>Log out</Text>
                </TouchableOpacity>

            </View>
            </View>
        )
    }
}


