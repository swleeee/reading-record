import { useSession } from '@/features/get-session';
import { AuthContext } from '@/shared/context';

export const AuthProvider = (props: any) => {
  const {
    isPasswordResetAuthorized,
    isInitializing,
    userSession,
    user,
    setPasswordResetAuthorized,
  } = useSession();

  const value = {
    isPasswordResetAuthorized,
    isInitializing,
    user,
    userSession,
    setPasswordResetAuthorized,
  };

  return <AuthContext.Provider value={value} {...props} />;
};
