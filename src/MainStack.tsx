import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthTabs from './AuthTabs';
import LoginScreen from './LoginScreen';
import {useAuth} from './hooks/useAuth';

export type MainStackNavigatorParams = {
  Auth: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<MainStackNavigatorParams>();

const MainStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Auth' : 'Login'}>
      <Stack.Screen name="Auth" component={AuthTabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
