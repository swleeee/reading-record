import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Session, User } from '@supabase/supabase-js';

import { supabase } from '@/lib';
import { queryClient } from '@/services';

export const AuthContext = createContext<{
  isInitializing: boolean;
  isPasswordResetAuthorized: boolean;
  user: User | null;
  userSession: Session | null;
  setPasswordResetAuthorized: Dispatch<SetStateAction<boolean>>;
}>({
  isInitializing: true,
  isPasswordResetAuthorized: false,
  user: null,
  userSession: null,
  setPasswordResetAuthorized: () => {},
});

export const AuthContextProvider = (props: any) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isPasswordResetAuthorized, setPasswordResetAuthorized] =
    useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
      setIsInitializing(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (e, session) => {
        console.log(`Supabase auth event: ${e}`);
        setUserSession(session);
        setUser(session?.user ?? null);
        setIsInitializing(false);

        if (!session?.user) {
          queryClient.invalidateQueries();
        }

        if (e === 'PASSWORD_RECOVERY') {
          setPasswordResetAuthorized(true);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    isPasswordResetAuthorized,
    isInitializing,
    userSession,
    user,
    setPasswordResetAuthorized,
  };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthContextProvider.');
  }
  return context;
};
