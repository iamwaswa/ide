import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, OrNull } from '@types';

import React from 'react';
import { loginAsync } from './utils';
import { useAuthContext } from '@context/auth/hooks';

interface IUseLogin {
  errorMessage: OrNull<string>;
  studentLoggingIn: boolean;
  instructorLoggingIn: boolean;
  clearErrorMessage: () => void;
  loginAsInstructorAsync: Callback<React.MouseEvent, void>;
  loginAsStudentAsync: Callback<React.MouseEvent, void>;
}

interface IHandleLoginArgs {
  action: ActionEnum.LOGIN_AS_INSTRUCTOR | ActionEnum.LOGIN_AS_STUDENT;
  uid?: string;
}

export const useLogin = (): IUseLogin => {
  const [
    { errorMessage, studentLoggingIn, instructorLoggingIn, role, uid },
    updateState,
  ] = React.useReducer(reducer, initialState);
  const { setRole, setUid } = useAuthContext();

  React.useEffect((): void => {
    if (role !== null && uid) {
      setUid(uid);
      setRole(role);
    }
  }, [role, uid]);

  const handleLogin = ({ action, uid }: IHandleLoginArgs): void => {
    if (uid) {
      updateState({ type: action, uid });
    }
  };

  const loginAsInstructorAsync = async (): Promise<void> => {
    updateState({ type: ActionEnum.INSTRUCTOR_LOGGING_IN });

    loginAsync({
      email: process.env.INSTRUCTOR_EMAIL as string,
      password: process.env.INSTRUCTOR_PASSWORD as string,
      onLoggedIn: (uid?: string): void =>
        handleLogin({ action: ActionEnum.LOGIN_AS_INSTRUCTOR, uid }),
      onError: ({ message }: Error): void =>
        updateState({ type: ActionEnum.SET_ERROR, message }),
    });
  };

  const loginAsStudentAsync = async (): Promise<void> => {
    updateState({ type: ActionEnum.STUDENT_LOGGING_IN });

    loginAsync({
      email: process.env.STUDENT_EMAIL as string,
      password: process.env.STUDENT_PASSWORD as string,
      onLoggedIn: (uid?: string): void =>
        handleLogin({ action: ActionEnum.LOGIN_AS_STUDENT, uid }),
      onError: ({ message }: Error): void =>
        updateState({ type: ActionEnum.SET_ERROR, message }),
    });
  };

  const clearErrorMessage = (): void =>
    updateState({ type: ActionEnum.CLEAR_ERROR });

  return {
    errorMessage,
    studentLoggingIn,
    instructorLoggingIn,
    clearErrorMessage,
    loginAsInstructorAsync,
    loginAsStudentAsync,
  };
};
