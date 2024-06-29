import { Dispatch, SetStateAction, createContext } from 'react';
import { Session, User } from '@supabase/supabase-js';

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
