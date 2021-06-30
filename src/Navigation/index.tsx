import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cards from '../Containers/Cards';
import CardDetail from '../Containers/CardDetail';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: '#fff'}}}>
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="CardDetail" component={CardDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);
