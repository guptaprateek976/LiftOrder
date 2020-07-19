import React, { useEffect,useContext,useState } from 'react';
import {View,Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import {Context as LiftContext } from '../context/LiftContext'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LiftStatus = () => {

    const {state:{floors,execOrder}, getFloors,updateFloors,updateOrder}= useContext(LiftContext);
    
    const order = [];
    const [upArray, setupArray] = useState([]);
    const [downArray, setDownArray] = useState([]);


    useEffect(()=> {
        getFloors();
        if(execOrder){
            triggerOrder();
        }
    },[execOrder])

    const renderItem = ({item,index}) => {
        return(

            <View style={styles.buttonView}>
                {
                item.id == 6 || item.id ==0 ?
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={item.isSelectUp || item.isSelectDown? styles.btnActive:styles.liftButton} onPress={item.id == 6 ? ()=> selectDataDown(item,index): ()=> selectDataUp(item,index)}>
                        <Text style={styles.liftNumber}>{item.id}</Text>
                        {item.id == 6?<FontAwesome name={"arrow-down"} size={30} style={{marginTop: 20}} /> :<FontAwesome name="arrow-up" size={30} style={{marginTop: 20}} /> }
                    </TouchableOpacity>
                </View>
                :<View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={item.isSelectUp? styles.btnActive:styles.liftButton} onPress={()=> selectDataUp(item,index)}>
                        <Text style={styles.liftNumber}>{item.id}</Text>
                        <FontAwesome name={"arrow-up"} size={30} style={{marginTop: 20}} />                    
                    </TouchableOpacity>
                    <TouchableOpacity style={item.isSelectDown?styles.btnActive: styles.liftButton} onPress={()=> selectDataDown(item,index)}>
                        <Text style={styles.liftNumber}>{item.id}</Text>
                        <FontAwesome name={"arrow-down"} size={30} style={{marginTop: 20}} />                    
                    </TouchableOpacity>
                </View>
                    
                }
            </View>
        )
    }

    const selectDataUp = (item,index) => {

        upArray.push(item.id);
        if(item.id<upArray[upArray.length-2])
            upArray.sort();

        const newData= floors.map(e => {
            if (e.id== item.id){
                return{
                    ...e,
                    isSelectUp: !e.isSelectUp
                }   
            }

            return {
                ...e,
                isSelectUp: e.isSelectUp
            }
        });
       updateFloors(newData);
    }

    const selectDataDown = (item,index) => {

        downArray.push(item.id);
             if(item.id<downArray[downArray.length-2])
                downArray.sort()

        const newData= floors.map(e => {
            if (e.id== item.id){
                return{
                    ...e,
                    isSelectDown: !e.isSelectDown
                }   
            }

            return {
                ...e,
                isSelectDown: e.isSelectDown
            }
        });
       updateFloors(newData);
    }

    const triggerOrder = () => {
        while(upArray.length>0){
            order.push(upArray.shift());
        }
        while(downArray.length>0){
            if(order[order.length-1]==downArray[downArray.length-1])
                downArray.pop();
            else
                order.push(downArray.pop());
        }
        console.log('order', order);
        updateOrder(order);
       // resetStatus();

    }

    return(
        <FlatList 
        data={floors}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={floors}
        />
    )
};

const styles = StyleSheet.create({
    liftButton:{
        height:80,
        width: 80,
        borderRadius: 100,
        margin: 5,
        backgroundColor:"white",
        borderColor:"green",
        borderWidth:1,
        flexDirection:'row'
     },
     btnActive:{
        height:80,
        width: 80,
        borderRadius: 100,
        margin: 5,
        backgroundColor:"grey",
        borderColor:"#000000",
        borderWidth:1,
        flexDirection:'row'
        
    },
    liftNumber:{
        color:'#000000',
        fontSize:40,
        marginTop:10,
        paddingLeft:20
    },
    buttonView:{
        height:88,
        borderWidth: 1,
    
    }
})

export default LiftStatus;