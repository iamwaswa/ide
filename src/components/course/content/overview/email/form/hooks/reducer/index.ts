import { OrNull, User } from '@types';

export enum ActionEnum {
  UPDATE_RECIPIENTS,
  UPDATE_MESSAGE,
  UPDATE_SUBJECT,
  SENDING_EMAIL,
  ERROR,
  RESET,
}

export type Action =
  | { type: ActionEnum.UPDATE_RECIPIENTS; options: HTMLOptionsCollection }
  | { type: ActionEnum.UPDATE_MESSAGE; newMessage: string }
  | { type: ActionEnum.UPDATE_SUBJECT; newSubject: string }
  | { type: ActionEnum.SENDING_EMAIL }
  | { type: ActionEnum.ERROR; errorMessage: string }
  | { type: ActionEnum.RESET };

export type State = {
  recipients: Set<User>;
  message: string;
  subject: string;
  errorMessage: OrNull<string>;
  sendingEmail: boolean;
  resetDone: boolean;
};

export const initialState: State = {
  recipients: new Set<User>(),
  message: ``,
  subject: ``,
  errorMessage: null,
  sendingEmail: false,
  resetDone: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.UPDATE_RECIPIENTS: {
      const selectedOptions = Array.from(action.options).filter(
        (option: HTMLOptionElement): boolean => option.selected
      );
      return {
        ...state,
        resetDone: false,
        recipients: new Set<User>(
          selectedOptions.map(
            ({ value }: HTMLOptionElement): User => JSON.parse(value) as User
          )
        ),
      };
    }
    case ActionEnum.UPDATE_MESSAGE: {
      return { ...state, resetDone: false, message: action.newMessage };
    }
    case ActionEnum.UPDATE_SUBJECT: {
      return { ...state, resetDone: false, subject: action.newSubject };
    }
    case ActionEnum.SENDING_EMAIL: {
      return { ...state, resetDone: false, sendingEmail: true };
    }
    case ActionEnum.ERROR: {
      return {
        ...initialState,
        sendingEmail: false,
        errorMessage: action.errorMessage,
      };
    }
    case ActionEnum.RESET: {
      return { ...initialState, resetDone: true };
    }
    default:
      return state;
  }
};
