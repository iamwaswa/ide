import { ActionEnum, TabEnum, initialState, reducer } from './reducer';

import { OrNull } from '@types';
import React from 'react';

export interface IUseGradingContext {
  annotate: boolean;
  comments: OrNull<string>;
  score: OrNull<number>;
  total: OrNull<number>;
  tab: TabEnum;
  toggleAnnotate: () => void;
  updateComments: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateScore: (
    _: React.ChangeEvent<{}>,
    score: number | Array<number>
  ) => void;
  updateTotal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateTab: (event: React.ChangeEvent<{}>, tab: TabEnum) => void;
}

export const GradingContext = React.createContext<Partial<IUseGradingContext>>(
  {}
);

export const GradingContextProvider: React.FC = ({ children }) => {
  const [state, updateState] = React.useReducer(reducer, initialState);

  const toggleAnnotate = (): void =>
    updateState({ type: ActionEnum.TOGGLE_ANNOTATE });

  const updateComments = (event: React.ChangeEvent<HTMLInputElement>): void =>
    updateState({
      type: ActionEnum.UPDATE_COMMENTS,
      comments: event.target.value,
    });

  const updateScore = (
    _: React.ChangeEvent<{}>,
    score: number | Array<number>
  ): void => updateState({ type: ActionEnum.UPDATE_SCORE, score });

  const updateTotal = (event: React.ChangeEvent<HTMLInputElement>): void =>
    updateState({
      type: ActionEnum.UPDATE_TOTAL,
      total: Number(event.target.value),
    });

  const updateTab = (_: React.ChangeEvent<{}>, tab: TabEnum): void =>
    updateState({ type: ActionEnum.UPDATE_TAB, tab });

  return (
    <GradingContext.Provider
      value={{
        ...state,
        toggleAnnotate,
        updateComments,
        updateScore,
        updateTotal,
        updateTab,
      }}
    >
      {children}
    </GradingContext.Provider>
  );
};
