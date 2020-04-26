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

  const onLoggedInAsync = (
    action: ActionEnum.LOGIN_AS_INSTRUCTOR | ActionEnum.LOGIN_AS_STUDENT
  ): Callback<firebase.auth.UserCredential, Promise<void>> => async ({
    user,
  }: firebase.auth.UserCredential): Promise<void> => {
    if (user) {
      updateState({ type: action, uid: user.uid });
    }
  };

  const loginAsInstructorAsync = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(`instructor@email.ca`, `instructor`)
      .then(onLoggedInAsync(ActionEnum.LOGIN_AS_INSTRUCTOR))
      .catch(({ message }: Error): void =>
        updateState({ type: ActionEnum.SET_ERROR, message })
      );
  };

  const loginAsStudentAsync = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(`student@email.ca`, `student`)
      .then(onLoggedInAsync(ActionEnum.LOGIN_AS_STUDENT))
      .catch(({ message }: Error): void =>
        updateState({ type: ActionEnum.SET_ERROR, message })
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
