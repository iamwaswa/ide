import { Callback, OrNull } from '@types';

import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuthContext } from '@context/auth/hooks';

interface IUseLogout {
  errorMessage: OrNull<string>;
  clearErrorMessage: () => void;
  logoutAsync: Callback<React.MouseEvent, void>;
}

export const useLogout = (): IUseLogout => {
  const { setRole, setUid } = useAuthContext();
  const [errorMessage, setErrorMessage] = React.useState<OrNull<string>>(null);

  const logoutAsync = (): void => {
    firebase
      .auth()
      .signOut()
      .then((): void => {
        setRole(null);
        setUid(null);
      })
      .catch(({ message }: Error): void => {
        setErrorMessage(message);
      });
  };

  const clearErrorMessage = (): void => {
    setErrorMessage(null);
  };

  return {
    errorMessage,
    clearErrorMessage,
    logoutAsync,
  };
};
