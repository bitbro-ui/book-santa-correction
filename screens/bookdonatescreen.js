import React,{Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity,ListItem} from 'react-native';
import Myheader from '../components/myheader';
import firebase from 'firebase';
import db from '../config';

export default class Bookdonation extends Component {
  constructor(){
    super();
    this.state={
      requestedbooks:[]
    }
    this.requestreferrence=null
  }
  requestedbookslist=()=>{
    this.requestreferrence=db.collection('requestbooks').onSnapshot((onSnapshot)=>{
    var tradelist=snapshot.docs.map(document=>document.data());
    this.setState({requestedbooks:requestedbooks})
    })  
  }
  componentDidMount(){this.requestedbookslist()}
  componentWillUnmount(){this.requestreferrence()}
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item,i})=>{
    return(
      <ListItem key={i}
      title={item.bookname}
      subtitle={item.reason}
      rightElement={
      <TouchableOpacity>
        <Text>
          View
        </Text>
      </TouchableOpacity>}/>
    )
  }
    render(){
  return (
    <View>
        <Text>book donate</Text>
    </View>
  );
}
}
