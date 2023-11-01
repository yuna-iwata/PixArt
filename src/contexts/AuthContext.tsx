import React, {createContext, useState, useCallback, useMemo} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<AuthContext | undefined>(undefined);

interface AuthContext {
  isLoggedIn: boolean;
  login: (credential: FirebaseAuthTypes.AuthCredential) => void;
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(
    async (credential: FirebaseAuthTypes.AuthCredential) => {
      setIsLoggedIn(true);
      await AsyncStorage.setItem('token', credential.toString());
    },
    [],
  );

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
    }),
    [isLoggedIn, login],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
