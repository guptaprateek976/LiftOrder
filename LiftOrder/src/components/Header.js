import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Lift </Text>
        </View>
    )
    
};

const styles = StyleSheet.create({

    headerContainer:{
        backgroundColor:"#F8F8F8",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        flex:1,
    },
    headerTitle:{
        fontSize: 20
    }

});

export default Header;