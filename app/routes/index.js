import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/Home.page';
import AboutRoutesTabNavigator from './about.routes';
import t from '../utils/language.utils';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{title: t('NAV_HEADER_TEXT_HOME')}} />
        <Stack.Screen name="AboutUs" component={AboutRoutesTabNavigator} options={{title: t('ABOUT_us')}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
