import React from 'react';
import MainStack from './src/MainStack';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/AuthContext';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
