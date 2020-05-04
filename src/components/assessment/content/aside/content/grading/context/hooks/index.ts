import * as React from 'react';

import { GradingContext, IUseGradingContext } from '..';

export const useGradingContext = (): IUseGradingContext => {
  const {
    annotate,
    comments,
    score,
    total,
    tab,
    toggleAnnotate,
    updateComments,
    updateScore,
    updateTotal,
    updateTab,
  } = React.useContext(GradingContext);

  if (
    annotate === undefined ||
    comments === undefined ||
    score === undefined ||
    total === undefined ||
    tab === undefined ||
    toggleAnnotate === undefined ||
    updateComments === undefined ||
    updateScore === undefined ||
    updateTotal === undefined ||
    updateTab === undefined
  ) {
    throw Error(`GradingContext is undefined`);
  }

  return {
    annotate,
    comments,
    score,
    total,
    tab,
    toggleAnnotate,
    updateComments,
    updateScore,
    updateTotal,
    updateTab,
  };
};
