import { OrNull } from '@types';
import { RoleEnum } from '@enums';

export enum ActionEnum {
  LOGIN_AS_INSTRUCTOR,
  LOGIN_AS_STUDENT,
  CLEAR_ERROR,
  SET_ERROR,
}

type Action =
  | { type: ActionEnum.LOGIN_AS_INSTRUCTOR; uid: string }
  | { type: ActionEnum.LOGIN_AS_STUDENT; uid: string }
  | { type: ActionEnum.CLEAR_ERROR }
  | { type: ActionEnum.SET_ERROR; message: string };

interface IState {
  errorMessage: OrNull<string>;
  role: OrNull<RoleEnum>;
  uid: OrNull<string>;
}

export const initialState: IState = {
  errorMessage: null,
  role: null,
  uid: null,
};

export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionEnum.CLEAR_ERROR: {
      return { ...state, errorMessage: null };
    }
    case ActionEnum.SET_ERROR: {
      return { ...state, errorMessage: action.message };
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
