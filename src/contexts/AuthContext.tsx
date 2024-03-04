import React, {createContext, useState, useCallback, useMemo} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<AuthContext | undefined>(undefined);

interface AuthContext {
  isLoggedIn: boolean;
  loginWithGoogle: (credential: FirebaseAuthTypes.AuthCredential) => void;
  login: () => void;
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginWithGoogle = useCallback(
    async (credential: FirebaseAuthTypes.AuthCredential) => {
      setIsLoggedIn(true);
      await AsyncStorage.setItem('token', credential.toString());
    },
    [],
  );

  const login = useCallback(() => {
    setIsLoggedIn(true);
    //set the credential to async storage later
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      loginWithGoogle,
      login,
    }),
    [isLoggedIn, loginWithGoogle, login],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
