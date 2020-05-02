import { OrNull } from '@types';

export enum ActionEnum {
  UPDATE_RECIPIENTS,
  UPDATE_TEXT,
  SENDING_EMAIL,
  ERROR,
  RESET,
}

export type Action =
  | { type: ActionEnum.UPDATE_RECIPIENTS; emails: Array<string> }
  | { type: ActionEnum.UPDATE_TEXT; name: string; value: string }
  | { type: ActionEnum.SENDING_EMAIL }
  | { type: ActionEnum.ERROR; errorMessage: string }
  | { type: ActionEnum.RESET };

export type State = {
  recipients: Set<string>;
  message: string;
  subject: string;
  errorMessage: OrNull<string>;
  sendingEmail: boolean;
  resetDone: boolean;
};

export const initialState: State = {
  recipients: new Set<string>(),
  message: ``,
  subject: ``,
  errorMessage: null,
  sendingEmail: false,
  resetDone: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.UPDATE_RECIPIENTS: {
      return {
        ...state,
        resetDone: false,
        recipients: new Set<string>(
          action.emails.filter((email: string): boolean => email !== ``)
        ),
      };
    }
    case ActionEnum.UPDATE_TEXT: {
      return { ...state, resetDone: false, [action.name]: action.value };
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
