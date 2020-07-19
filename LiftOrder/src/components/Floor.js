import React,{useContext,useEffect} from 'react';
import {StyleSheet, View , Text, FlatList} from 'react-native';
import {Context as LiftContext} from '../context/LiftContext'

const Floor = () => {

    const {state:{floors}, getFloors}= useContext(LiftContext);
    useEffect(()=>{
        getFloors();
    },[])
    return (
        <FlatList 
        data={floors}
        showsVerticalScrollIndicator={false}
        keyExtractor={(result)=>result.id}
        renderItem={({item})=>{
            return(
                <View style={ item.isSelectUp || item.isSelectDown ? Styles.activeFloorLevel:Styles.floorLevel} >
                <Text style={Styles.floorNo}>{item.id}</Text>
                 </View>
            )
            
        }}
        />
    );
};

const Styles = StyleSheet.create({
    floorLevel:{
        borderWidth: 1,
        height: 88,
        justifyContent:'center',
        alignItems:'center'
    },
    activeFloorLevel:{
        borderWidth: 1,
        height: 88,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "green"
    },
    floorNo:{
        fontSize: 40
    }
});

export default Floor;