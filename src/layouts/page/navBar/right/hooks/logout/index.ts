import { Callback, OrNull } from '@types';

import React from 'react';
import { useAuthContext } from '@context/auth/hooks';

interface IUseLogout {
  errorMessage: OrNull<string>;
  clearErrorMessage: () => void;
  logout: Callback<React.MouseEvent, void>;
}

export const useLogout = (): IUseLogout => {
  const { setRole, setUid } = useAuthContext();
  const [errorMessage, setErrorMessage] = React.useState<OrNull<string>>(null);

  const logout = (): void => {
    setRole(null);
    setUid(null);
  };

  const clearErrorMessage = (): void => {
    setErrorMessage(null);
  };

  return {
    errorMessage,
    clearErrorMessage,
    logout,
  };
};
