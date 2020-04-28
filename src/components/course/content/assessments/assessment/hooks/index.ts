import { Assignment, Quiz, Submission } from '@types';

import { AssessmentEnum } from '@enums';
import React from 'react';
import { useDuration } from '@hooks/duration';

interface IArgs {
  assessment: Assignment | Quiz;
}

interface IUseAssessment {
  dueDate: string;
  duration: string;
  startDate: string;
  showComments: boolean;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  submission?: Submission;
}

export const useAssessment = ({ assessment }: IArgs): IUseAssessment => {
  const [showComments, setShowComments] = React.useState(() => false);
  const submission = React.useMemo(() => assessment.submissions?.[0], [
    assessment,
  ]);
  const dueDate = React.useMemo(
    () =>
      assessment.type === AssessmentEnum.ASSIGNMENT
        ? new Date((assessment as Assignment).dueDate).toUTCString()
        : `-`,
    [assessment]
  );
  const startDate = React.useMemo(
    () =>
      assessment.type === AssessmentEnum.QUIZ
        ? new Date((assessment as Quiz).startDate).toUTCString()
        : `-`,
    [assessment]
  );
  const duration = useDuration({
    durationInSeconds:
      assessment.type === AssessmentEnum.QUIZ
        ? (assessment as Quiz).durationInSeconds
        : undefined,
  });

  return {
    showComments,
    setShowComments,
    submission,
    dueDate,
    startDate,
    duration,
  };
};
