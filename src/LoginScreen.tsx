import {View} from 'react-native';
import React, {useEffect, useCallback} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useAuth} from './hooks/useAuth';

export default function LoginScreen() {
  const {login} = useAuth();

  const signIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(credential);
      await login(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log(error);
      }
    }
  }, [login]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '767981484176-ck7sf1iifrvn4u1v4b2rudcb2cdqod8m.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
}
