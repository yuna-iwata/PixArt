import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthTabs from '../navigation/AuthTabs';
import LoginScreen from './signIn/LoginScreen';
import {useAuth} from './hooks/useAuth';
import SignUpScreen from './signIn/SignUpScreen';

export type MainStackNavigatorParams = {
  Auth: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<MainStackNavigatorParams>();

const MainStack = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="Auth"
          component={AuthTabs}
        />
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUpScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
