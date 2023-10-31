import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  appLoaded: false,
  login: undefined!,
  logOut: undefined!,
});
const waitFor = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(undefined), ms));

interface AuthContext {
  isLoggedIn: boolean;
  appLoaded: boolean;
  login: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  //const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [appLoaded, setAppLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function restore() {
      await restoreApp();
    }
    restore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restoreApp = useCallback(async () => {
    const tempToken = await AsyncStorage.getItem('token');
    setToken(tempToken);
    // We might do more things here if the user is logged in
    // Get user profile
    // Check for notifications
    await waitFor(500);
    setAppLoaded(true);
    // SplashScreen.hide();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  //   const login = async () => {
  //     // console.log(newToken);
  //     // await AsyncStorage.setItem('token', newToken);
  //     // console.log('here');
  //     // setToken(newToken);
  //     setIsLoggedIn(true);
  //   };

  const logOut = useCallback(async () => {
    await AsyncStorage.clear();
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({
      appLoaded,
      isLoggedIn,
      login,
      logOut,
    }),
    [appLoaded, isLoggedIn, logOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
