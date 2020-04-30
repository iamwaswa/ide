import { AssessmentEnum, DurationUnitEnum } from '@enums';

import { AssessmentFile } from '@types';

export enum ActionEnum {
  VERSION_INDEX_FILE_CHANGE,
  OTHER_FILE_CHANGE,
  ADD_QUESTION,
  DELETE_QUESTION,
  DURATION_CHANGE,
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
  | { type: ActionEnum.DURATION_CHANGE; value: number }
  | { type: ActionEnum.QUESTIONS_CHANGE; id: string; content: string }
  | {
      type: ActionEnum.OTHER_FIELD_CHANGE;
      name: string;
      value: Date | number | string | DurationUnitEnum;
    };

export type State = {
  file: AssessmentFile;
  name: string;
  questions: Map<string, string>;
  script: string;
  dueDate?: Date;
  startDate?: Date;
  duration?: number;
  durationUnit?: DurationUnitEnum;
};

export const initialState = (type: AssessmentEnum): State => ({
  file: {
    name: ``,
    language: ``,
    lastModified: new Date(),
    data: ``,
    versionIndex: 3,
  },
  name: ``,
  questions: new Map<string, string>(),
  script: ``,
  dueDate: type === AssessmentEnum.ASSIGNMENT ? new Date() : undefined,
  startDate: type === AssessmentEnum.QUIZ ? new Date() : undefined,
  duration: type === AssessmentEnum.QUIZ ? 15 : undefined,
  durationUnit: DurationUnitEnum.MINUTES,
});

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.VERSION_INDEX_FILE_CHANGE: {
      return {
        ...state,
        file: {
          ...state.file,
          lastModified: new Date(),
          [action.property]: action.value,
        },
      };
    }
    case ActionEnum.DURATION_CHANGE: {
      return {
        ...state,
        duration: action.value,
      };
    }
    case ActionEnum.OTHER_FILE_CHANGE: {
      return {
        ...state,
        file: {
          ...state.file,
          lastModified: new Date(),
          [action.property]: action.value,
        },
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
