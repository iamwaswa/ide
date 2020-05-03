import { Assignment, OrNull, Quiz } from '@types';

import React from 'react';

export interface IUseAssessmentContext {
  assessment: OrNull<Assignment | Quiz>;
  setAssessment: React.Dispatch<
    React.SetStateAction<OrNull<Assignment | Quiz>>
  >;
}

export const AssessmentContext = React.createContext<
  Partial<IUseAssessmentContext>
>({});

interface IProps {
  initialAssessment?: Assignment | Quiz;
}

export const AssessmentContextProvider: React.FC<IProps> = ({
  children,
  initialAssessment = null,
}) => {
  const [assessment, setAssessment] = React.useState<OrNull<Assignment | Quiz>>(
    initialAssessment
  );

  return (
    <AssessmentContext.Provider value={{ assessment, setAssessment }}>
      {children}
    </AssessmentContext.Provider>
  );
};
