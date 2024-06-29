import { useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';

import { supabase, queryClient } from '@/shared/lib';

export const useSession = () => {
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
  }, [setUserSession, setUser, setIsInitializing, setPasswordResetAuthorized]);

  return {
    isInitializing,
    user,
    userSession,
    isPasswordResetAuthorized,
    setPasswordResetAuthorized,
  };
};
