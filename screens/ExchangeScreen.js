import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';


export default class ExchangeScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            itemName:'',
            itemDescription:''
        }
        
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    
    addItem=(itemName,itemDescription)=>{
        var userId=this.state.userId,
        var randomRequestId=this.createUniqueId()
        db.collection('RequestItem').add({
            "user_Id":userId,
            "itemName":itemName,
            "itemDescription":itemDescription,
            "requestId":randomRequestId

        })
        this.setState({
            itemName:'',
            itemDescription:''
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress: ()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
    }
    

    render(){
        return(

            <View>
                <TextInput
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({itemName:text})
                }}
                value={this.state.itemName}
                ></TextInput>

                <TextInput
                placeholder={"Description"}
                onChangeText={(text)=>{
                    this.setState({itemDescription:text})
                }}
                value={this.state.itemDescription}
                ></TextInput>
                <TouchableOpacity
                style={{
                    width:100,
                    height:30
                }}
                onPress={()=>{this.addItem(this.state.itemName,this.state.itemDescription)}}
                >
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

