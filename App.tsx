import React from 'react';
import MainStack from './src/MainStack';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
