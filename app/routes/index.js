import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/Home.page';
import AboutRoutesTabNavigator from './about.routes';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutRoutesTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
