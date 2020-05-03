import * as React from 'react';

import { AssessmentContext, IUseAssessmentContext } from '../';

export const useAssessmentContext = (): IUseAssessmentContext => {
  const { assessment, setAssessment } = React.useContext(AssessmentContext);

  if (assessment === undefined || setAssessment === undefined) {
    throw Error(`AssessmentContext is undefined`);
  }

  return {
    assessment,
    setAssessment,
  };
};
