import React,{useContext} from 'react';
import {Text, View , StyleSheet} from 'react-native';
import {Context as LiftContext } from '../context/LiftContext'

const Order = () =>{

    const {state:{order}}= useContext(LiftContext);
    const none='No data Found'
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30}}>Order of Execution is</Text>
            <View style={styles.orderView}>
                {order.length?
                order.map((item,key)=>(
                <Text key={key} style={styles.textStyle}>{item} {key == order.length -1 ? null: '->'}  </Text>
                )):<Text>{none}</Text>}
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:'center',
        flex:1
    },
    orderView:{
        flexDirection:'row'
    },
    textStyle:{
        fontSize:25
    }

})  

export default Order;