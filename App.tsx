import React from 'react';
import MainStack from './src/MainStack';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/AuthContext';
import {ThemeProvider} from 'styled-components/native';
import theme from './theme/theme';
import {client} from './src/apollo';
import {ApolloProvider} from '@apollo/client';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

export default App;
