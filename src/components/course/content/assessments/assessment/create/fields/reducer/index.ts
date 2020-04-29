import { AssessmentFile } from '@types';

export enum ActionEnum {
  VERSION_INDEX_FILE_CHANGE,
  OTHER_FILE_CHANGE,
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTIONS_CHANGE,
  OTHER_FIELD_CHANGE,
}

export type Action =
  | {
      type: ActionEnum.OTHER_FILE_CHANGE;
      property: `name` | `language` | `data`;
      value: string;
    }
  | {
      type: ActionEnum.VERSION_INDEX_FILE_CHANGE;
      property: `versionIndex`;
      value: number;
    }
  | { type: ActionEnum.ADD_QUESTION; id: string }
  | { type: ActionEnum.DELETE_QUESTION; id: string }
  | { type: ActionEnum.QUESTIONS_CHANGE; id: string; content: string }
  | {
      type: ActionEnum.OTHER_FIELD_CHANGE;
      name: string;
      value: Date | number | string;
    };

export type State = {
  file: AssessmentFile;
  name: string;
  questions: Map<string, string>;
  script: string;
  dueDate?: Date;
  startDate?: Date;
  durationInSeconds?: number;
};

export const initialState: State = {
  file: {
    name: ``,
    language: `nodejs`,
    lastModified: new Date(),
    data: ``,
    versionIndex: 0,
  },
  name: ``,
  questions: new Map<string, string>(),
  script: ``,
  dueDate: undefined,
  startDate: undefined,
  durationInSeconds: undefined,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.VERSION_INDEX_FILE_CHANGE: {
      return {
        ...state,
        file: { ...state.file, [action.property]: action.value },
      };
    }
    case ActionEnum.OTHER_FILE_CHANGE: {
      return {
        ...state,
        file: { ...state.file, [action.property]: action.value },
      };
    }
    case ActionEnum.ADD_QUESTION: {
      return { ...state, questions: state.questions.set(action.id, ``) };
    }
    case ActionEnum.DELETE_QUESTION: {
      state.questions.delete(action.id);
      return { ...state, questions: state.questions };
    }
    case ActionEnum.QUESTIONS_CHANGE: {
      return {
        ...state,
        questions: state.questions.set(action.id, action.content),
      };
    }
    case ActionEnum.OTHER_FIELD_CHANGE: {
      return { ...state, [action.name]: action.value };
    }
    default: {
      return state;
    }
  }
};
