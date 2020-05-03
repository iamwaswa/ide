import { OrNull } from '@types';

export enum ActionEnum {
  TOGGLE_ANNOTATE,
  UPDATE_COMMENTS,
  UPDATE_SCORE,
  UPDATE_TOTAL,
  UPDATE_TAB,
}

export enum TabEnum {
  SCORE = 'SCORE',
  COMMENTS = 'COMMENTS',
  ANNOTATE = 'ANNOTATE',
}

type Action =
  | { type: ActionEnum.TOGGLE_ANNOTATE }
  | { type: ActionEnum.UPDATE_COMMENTS; comments: OrNull<string> }
  | { type: ActionEnum.UPDATE_SCORE; score: OrNull<number | Array<number>> }
  | { type: ActionEnum.UPDATE_TOTAL; total: OrNull<number> }
  | { type: ActionEnum.UPDATE_TAB; tab: TabEnum };

type State = {
  annotate: boolean;
  comments: OrNull<string>;
  score: OrNull<number>;
  total: OrNull<number>;
  tab: TabEnum;
};

export const initialState: State = {
  annotate: false,
  comments: null,
  score: null,
  total: null,
  tab: TabEnum.SCORE,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.TOGGLE_ANNOTATE: {
      return { ...state, annotate: !state.annotate };
    }
    case ActionEnum.UPDATE_COMMENTS: {
      return { ...state, comments: action.comments ? action.comments : null };
    }
    case ActionEnum.UPDATE_SCORE: {
      return { ...state, score: Number(action.score) };
    }
    case ActionEnum.UPDATE_TOTAL: {
      return { ...state, total: action.total };
    }
    case ActionEnum.UPDATE_TAB: {
      return { ...state, tab: action.tab };
    }
    default:
      return state;
  }
};
