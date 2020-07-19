import React,{useContext} from 'react';
import {StyleSheet, View , Text , TouchableOpacity} from 'react-native';
import {Context as LiftContext } from '../context/LiftContext'


const ExecuteButton = ({btn}) => {

    const {state, executeOrder}= useContext(LiftContext);
    const execution=() =>{
        executeOrder();
        btn();
    }

    return(
        <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.buttonStyle} onPress={()=> execution()}>
                <Text style={styles.textStyle}>Execute Order</Text>
            </TouchableOpacity>
        </View>
    )
    
};

const styles = StyleSheet.create({

    buttonContainer:{
        height: 40,
        flex:1
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderWidth: 1,
        justifyContent: 'center'
    },
    textStyle:{
        alignSelf:'center',
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 10
    }

});

export default ExecuteButton;