import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

export default AboutUsRoutes;