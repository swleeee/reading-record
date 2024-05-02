import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';

import { supabase } from '@/lib';

export const AuthContext = createContext<{
  isInitializing: boolean;
  user: User | null;
  userSession: Session | null;
}>({
  isInitializing: true,
  user: null,
  userSession: null,
});

export const AuthContextProvider = (props: any) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (e, session) => {
        console.log(`Supabase auth event: ${e}`);
        setUserSession(session);
        setUser(session?.user ?? null);
      },
    );

    setIsInitializing(false);

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = { isInitializing, userSession, user };
  return <AuthContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthContextProvider.');
  }
  return context;
};
