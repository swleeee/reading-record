import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useUser must be used within an AuthContextProvider.');
  }
  return context;
};
