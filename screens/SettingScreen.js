import React,{Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import firebase, { database } from 'firebase';
import db from '../config';
import { Alert } from 'react-native';

export default class SettingScreen extends Component{
 
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:''
        }
    }
    getData=()=>{
      var user=firebase.auth().currentUser
      var email=user.email
       db.collection('Users').where('emailId','==','email').get()
       .then(snapshot=>{
           snapshot.forEach(doc=>{
               var data = doc.data()
               this.setState({
                   firstName:data.firstName,
                   lastName:data.lastName,
                   address:data.address,
                   contact:data.contact,
                   docId:doc.id
                })
           })
       })
    }
    
    updateData=()=>{
       db.collection('Users').doc(this.state.docId)
       .update({
           "firstName":this.state.firstName,
           "LastName":this.state.lastName,
           "address":this.state.address,
           "contact":this.state.contact
       })
       Alert.alert("Profile Updated Successfully")
    }

    componentDidMount(){
        this.getData()
        this.updateData()
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder='First Name'
                style={{
                    width:100,
                    height:30,
                    borderWidth:2
                }}
                onChangeText={(text)=>{
                    this.setState({firstName:text})
                }}
                value={this.state.firstName}

                ></TextInput>
                <TextInput
                placeholder='Last Name'
                style={{
                    width:100,
                    height:30,
                    borderWidth:2
                }}
                onChangeText={(text)=>{
                    this.setState({lastName:text})
                }}
                value={this.state.lastName}
                ></TextInput>
                <TextInput
                placeholder='Address'
                style={{
                    width:100,
                    height:30,
                    borderWidth:2
                }}
                onChangeText={(text)=>{
                    this.setState({address:text})
                }}
                value={this.state.address}
                ></TextInput>
                <TextInput
                placeholder='contact no.'
                style={{
                    width:100,
                    height:30,
                    borderWidth:2
                }}
                onChangeText={(text)=>{
                    this.setState({contact:text})
                }}
                value={this.state.contact}
                ></TextInput>
                <TouchableOpacity
                style={{
                    width:70,
                    height:30,
                    borderWidth:3,
                    backgroundColor:'orange'

                }}
                onPress={()=>{
                    this.updateData()
                }}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}