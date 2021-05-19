import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
        emailId:'',
        password:'',
        address:'',
        contact:'',
        firstName:'',
        lastName:'',
        confirmPassword:'',
        isModalVisible:false
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(
            ()=>{
                return alert("Successful Login")
            }
        )
        .catch(error=>{
            var errorCode=error.Code
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }

    userSignUp=()=>{
        if(password!==confirmPassword){
            return alert("Password doesn't match!")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then(
            response=>{
                return alert("User added successfully")
               db.collection("Users").add({
                   firstName:this.state.firstName,
                   lastName:this.state.lastName,
                   address:this.state.address,
                   contactNo:this.state.contact,
                   email:this.state.emailId,
                   password:this.state.password
               })
            }
        ).catch(error=>{
            var errorCode=error.Code
            var errorMessage=error.message
            return alert(errorMessage)
        })
    }
    }
    

    showModal=()=>{
        return(
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}
            >
                <View>
                    <ScrollView style={{width:'100%'}}>
                    <TextInput
                        placeholder="First name"
                        style={{
                            width:200,
                            height:30,
                            borderWidth:3
                        }}
                        onChangeText={(text)=>{
                            this.setState({firstName:text})
                        }}
                        value={this.state.firstName}
                     >
                    </TextInput>
                    <TextInput
                        placeholder="Last name"
                        style={{
                            width:200,
                            height:30,
                            borderWidth:3
                        }}
                        onChangeText={(text)=>{
                            this.setState({lastName:text})
                        }}
                        value={this.state.lastName}
                     >
                    </TextInput>
                <TextInput
             placeholder="email id"
             keyboardType="email-address"
             style={{
                width:200,
                height:30,
                borderWidth:3
             }}
             onChangeText={(text)=>{
                 this.setState({emailId:text})
             }}
             value={this.state.emailId}
             ></TextInput>
             <TextInput
             placeholder="Password"
             secureTextEntry={true}
             style={{
                width:200,
                height:30,
                borderWidth:3
             }}
             onChangeText={(text)=>{
                 this.setState({password:text})
             }}
             value={this.state.password}
             ></TextInput>
               <TextInput
             placeholder="address"
             style={{
                width:200,
                height:30,
                borderWidth:3
             }}
             onChangeText={(text)=>{
                 this.setState({address:text})
             }}
             value={this.state.address}
             ></TextInput>
             <TextInput
             placeholder="Contact no."
             keyboardType='numeric'
             style={{
                width:200,
                height:30,
                borderWidth:3
             }}
             onChangeText={(text)=>{
                 this.setState({contact:text})
             }}
             value={this.state.contact}
             ></TextInput>
             <TouchableOpacity
                   style={{
                     width:100,
                     height:20,
                     borderWidth:3,
                     backgroundColor:'blue'
                     }}
                   onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}
                 >
                   <Text>Submit</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                   style={{
                     width:100,
                     height:20,
                     borderWidth:3,
                     backgroundColor:'blue'
                     }}
                   onPress={()=>{this.setState({isModalVisible:false})}}
                 >
                   <Text>Cancel</Text>
                 </TouchableOpacity>
             </ScrollView>
                </View>
            </Modal>
        )
    }

    render(){
        return(
            <View>
            <TextInput
            placeholder="email id"
            keyboardType="email-address"
            style={{
               width:200,
               height:30,
               borderWidth:2,
               margin:20
            }}
            onChangeText={(text)=>{
                this.setState({emailId:text})
            }}
            value={this.state.emailId}
            ></TextInput>
            <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
               width:200,
               height:30,
               borderWidth:2,
               margin:20
            }}
            onChangeText={(text)=>{
                this.setState({password:text})
            }}
            value={this.state.password}
            ></TextInput>
            <TouchableOpacity
            style={{
                width:100,
                height:20,
                borderWidth:2,
                margin:30,
                marginLeft:50,
                backgroundColor:'blue',
                alignItems:'center'
            }}
            onPress={this.userLogin(this.state.emailId,this.state.password)}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={{
               width:100,
               height:20,
               borderWidth:2,
               margin:30,
               marginLeft:50,
               backgroundColor:'blue',
               alignItems:'center'
            }}
             onPress={()=>{
               this.setState({isModalVisible:true})
            }}
             >
              <Text>Sign up</Text>
             </TouchableOpacity>

            </View>
        )
    }
}

export default WelcomeScreen;