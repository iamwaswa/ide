import * as React from 'react';

import { IUseQuizContext, QuizContext } from '../';

export const useQuizContext = (): IUseQuizContext => {
  const { start, setStart } = React.useContext(QuizContext);

  if (start === undefined || setStart === undefined) {
    throw Error(`QuizContext is undefined`);
  }

  return {
    start,
    setStart,
  };
};
