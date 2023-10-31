import React, {createContext, useState, useCallback, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<AuthContext | undefined>(undefined);

interface AuthContext {
  isLoggedIn: boolean;
  login: () => void;
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
    //add to async storage to restore
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
    }),
    [isLoggedIn, login],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
