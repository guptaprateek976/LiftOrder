import React, { useEffect,useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header'
import Floor from '../components/Floor'
import ExecutionButton from '../components/ExecuteButton'
import LiftStatus from '../components/LiftStatus'
import {Context as LiftContext } from '../context/LiftContext'



const Lift = ({navigation}) => {
    const {state:{floors,execOrder}, resetOrder}= useContext(LiftContext);

    useEffect(()=>{
        console.log('resrt')
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('reset')
            resetOrder();
          });
      
          return unsubscribe;
    },[navigation])

    return(
        <View style={styles.container}>
            <Header />
            <View style={{flex:9, flexDirection:'row'}}>
                <View style={styles.floorView}>
                    <Floor />
                </View>
                <View style={styles.liftView}>
                    <LiftStatus />
                </View>
            </View>
            <ExecutionButton btn={()=> navigation.navigate('Order')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    floorView:{
        flex:1,
    },
    liftView:{
        flex:1
    }
});

export default Lift