import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import React from 'react';
import {Profile} from '../screens/Profile';

const Tab = createBottomTabNavigator();

function AuthTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default AuthTabs;
