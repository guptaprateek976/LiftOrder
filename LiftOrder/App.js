import React from 'react';
import Lift from './src/screens/Lift'
import {Provider} from './src/context/LiftContext'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Order from './src/screens/Order'


const Stack = createStackNavigator();
const App = () => {

  

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Lift" 
        component={Lift}
        options={{header : () => false}} 
        />
        <Stack.Screen
        name="Order"
        component={Order}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
  

};



export default () => {
  return <Provider>
    <App />
  </Provider>
};