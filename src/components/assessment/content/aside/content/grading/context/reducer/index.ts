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
  | { type: ActionEnum.UPDATE_COMMENTS; comments: string }
  | { type: ActionEnum.UPDATE_SCORE; score: number | Array<number> }
  | { type: ActionEnum.UPDATE_TOTAL; total: number }
  | { type: ActionEnum.UPDATE_TAB; tab: TabEnum };

type State = {
  annotate: boolean;
  comments: string;
  score: number;
  total: number;
  tab: TabEnum;
};

export const initialState: State = {
  annotate: false,
  comments: ``,
  score: 0,
  total: 100,
  tab: TabEnum.SCORE,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionEnum.TOGGLE_ANNOTATE: {
      return { ...state, annotate: !state.annotate };
    }
    case ActionEnum.UPDATE_COMMENTS: {
      return { ...state, comments: action.comments };
    }
    case ActionEnum.UPDATE_SCORE: {
      return { ...state, score: Number(action.score) };
    }
    case ActionEnum.UPDATE_TOTAL: {
      return {
        ...state,
        total: action.total < state.score ? state.total : action.total,
      };
    }
    case ActionEnum.UPDATE_TAB: {
      return { ...state, tab: action.tab };
    }
    default:
      return state;
  }
};
