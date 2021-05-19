import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';


export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            requestedItemList:[]

        }

        this.requestRef=null
    }

    getRequestedItemList=()=>{
        this.requestRef=db.collection("requested_items")
        .onSnapshot((snapshot)=>{
            var requestedItemList=snapshot.docs.map((doc)=>doc.data())
            this.setState({
                requestedItemList:requestedItemList
            })
        })

    }

    componentDidMount(){
        this.getRequestedItemList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    keyExtracter=(item,index)=>index.toString()
    renderItem=({item,i})=>{
      console.log(item.item_name) 
      return(
      <ListItem
      key={i}
      title={item.item_name}
      subtitle={item.item_description}
      titleStyle={{color:'black',fontWeight:'bold'}}
      rightElement={<TouchableOpacity
      onPress={()=>{}}
      >
          <Text>Exchange</Text>
      </TouchableOpacity>}
      bottomDivider
      />
    )}
    render(){
        return(
            <View>
           {
               this.state.requestedItemList.length===0 ? 
               (<View>
                   <Text>List of all items</Text>
               </View>):
               (
                   <FlatList
                   keyExtractor={this.keyExtracter}
                   data={this.state.requestedItemList}
                   renderItem={this.renderItem}
                   ></FlatList>
               )
           }
            </View>
        )
    }
}


