import { OrNull } from '@types';
import { RoleEnum } from '@enums';

export enum ActionEnum {
  INSTRUCTOR_LOGGING_IN,
  STUDENT_LOGGING_IN,
  LOGIN_AS_INSTRUCTOR,
  LOGIN_AS_STUDENT,
  CLEAR_ERROR,
  SET_ERROR,
}

type Action =
  | { type: ActionEnum.INSTRUCTOR_LOGGING_IN }
  | { type: ActionEnum.STUDENT_LOGGING_IN }
  | { type: ActionEnum.LOGIN_AS_INSTRUCTOR; uid: string }
  | { type: ActionEnum.LOGIN_AS_STUDENT; uid: string }
  | { type: ActionEnum.CLEAR_ERROR }
  | { type: ActionEnum.SET_ERROR; message: string };

interface IState {
  errorMessage: OrNull<string>;
  instructorLoggingIn: boolean;
  studentLoggingIn: boolean;
  role: OrNull<RoleEnum>;
  uid: OrNull<string>;
}

export const initialState: IState = {
  errorMessage: null,
  instructorLoggingIn: false,
  studentLoggingIn: false,
  role: null,
  uid: null,
};

export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionEnum.CLEAR_ERROR: {
      return {
        ...state,
        instructorLoggingIn: false,
        studentLoggingIn: false,
        errorMessage: null,
      };
    }
    case ActionEnum.SET_ERROR: {
      return {
        ...state,
        instructorLoggingIn: false,
        studentLoggingIn: false,
        errorMessage: action.message,
      };
    }
    case ActionEnum.INSTRUCTOR_LOGGING_IN: {
      return { ...state, instructorLoggingIn: true };
    }
    case ActionEnum.STUDENT_LOGGING_IN: {
      return { ...state, studentLoggingIn: true };
    }
    case ActionEnum.LOGIN_AS_INSTRUCTOR: {
      return {
        ...state,
        errorMessage: null,
        role: RoleEnum.INSTRUCTOR,
        uid: action.uid,
      };
    }
    case ActionEnum.LOGIN_AS_STUDENT: {
      return {
        ...state,
        errorMessage: null,
        role: RoleEnum.STUDENT,
        uid: action.uid,
      };
    }
    default: {
      return state;
    }
  }
};
