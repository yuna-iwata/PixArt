import {View} from 'react-native';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export default function LoginScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
      />
    </View>
  );
}
