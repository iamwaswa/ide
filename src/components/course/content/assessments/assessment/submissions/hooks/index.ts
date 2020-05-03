import { Assignment, OrNull, Quiz, Submission } from '@types';

import React from 'react';
import { RoutesEnum } from '@enums';
import { Utils } from '@utils';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

interface IArgs {
  assessment: Assignment | Quiz;
}

export const useNavigateToGrading = ({
  assessment,
}: IArgs): ((submissions?: Submission) => void) => {
  const {
    uid,
    courseId,
    assessmentId,
    setAssessmentId,
    assessmentTitle,
    setAssessmentTitle,
  } = useAuthContext();
  const [submission, setSubmission] = React.useState<OrNull<Submission>>(null);

  React.useEffect((): void => {
    if (uid && courseId && assessmentId && assessmentTitle && submission) {
      navigate(
        Utils.createNavigationPath({
          route: RoutesEnum.ASSESSMENT,
          uid,
          courseId,
          assessmentId,
        }),
        {
          state: { ...assessment, submissions: submission ? [submission] : [] },
        }
      );
    }
  }, [assessmentId, assessmentTitle, courseId, submission, uid]);

  return (currentSubmission?: Submission): void => {
    if (uid && courseId && currentSubmission) {
      setAssessmentId(assessment.id);
      setAssessmentTitle(assessment.name);
      setSubmission(currentSubmission);
    } else {
      throw new Error(
        `Invalid state: uid - ${uid}, courseId - ${courseId}, submission - ${JSON.stringify(
          submission,
          null,
          2
        )}`
      );
    }
  };
};
