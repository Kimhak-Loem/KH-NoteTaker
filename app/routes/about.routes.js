import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import t from '../utils/language.utils';

const Tab = createBottomTabNavigator();
const AboutUsRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AboutApp" component={AboutApp} options={{title: t('ABOUT_theApp')}} />
      <Tab.Screen name="AboutDev" component={AboutDevs} options={{title: t('ABOUT_theCreators')}} />
    </Tab.Navigator>
  );
};

export default AboutUsRoutes;