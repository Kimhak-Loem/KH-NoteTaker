import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home.page';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';

const Tab = createBottomTabNavigator();
const AboutUsRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AboutApp" component={AboutApp} />
      <Tab.Screen name="AboutDev" component={AboutDevs} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AboutUs" component={AboutUsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
