import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, OrNull } from '@types';

import React from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useAuth } from '@context/auth/hooks';

interface IUseLogin {
  errorMessage: OrNull<string>;
  clearErrorMessage: () => void;
  loginAsInstructorAsync: Callback<React.MouseEvent, void>;
  loginAsStudentAsync: Callback<React.MouseEvent, void>;
}

export const useLogin = (): IUseLogin => {
  const [{ errorMessage, role, uid }, updateState] = React.useReducer(
    reducer,
    initialState
  );
  const { setRole, setUid } = useAuth();

  React.useEffect((): void => {
    if (role !== null && uid) {
      setUid(uid);
      setRole(role);
    }
  }, [role, uid]);

  const loginAsInstructorAsync = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(`instructor@email.ca`, `instructor`)
      .then(({ user }: firebase.auth.UserCredential): void => {
        if (user) {
          updateState({ type: ActionEnum.LOGIN_AS_INSTRUCTOR, uid: user.uid });
        }
      })
      .catch(({ message }: Error): void =>
        updateState({ type: ActionEnum.SET_ERROR, message })
      );
  };

  const loginAsStudentAsync = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(`student@email.ca`, `student`)
      .then(({ user }: firebase.auth.UserCredential): void => {
        if (user) {
          updateState({ type: ActionEnum.LOGIN_AS_STUDENT, uid: user.uid });
        }
      })
      .catch(({ message }: Error): void =>
        updateState({ type: ActionEnum.ERROR, message })
      );
  };

  const clearErrorMessage = () => {
    updateState({ type: ActionEnum.CLEAR_ERROR });
  };

  return {
    errorMessage,
    clearErrorMessage,
    loginAsInstructorAsync,
    loginAsStudentAsync,
  };
};
