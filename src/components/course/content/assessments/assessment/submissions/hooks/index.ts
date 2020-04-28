import { Assignment, Quiz, Submission } from '@types';

import React from 'react';
import { RoutesEnum } from '@enums';
import { createNavigationPath } from '@utils';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

interface IArgs {
  assessment: Assignment | Quiz;
}

export const useNavigateToGrading = (
  args: IArgs
): ((submission?: Submission) => void) => {
  const { uid, courseId, assessmentId } = useAuthContext();
  const [readyToNavigate, setReadyToNavigate] = React.useState(() => false);

  React.useEffect(() => {
    if (readyToNavigate && uid && courseId && assessmentId) {
      navigate(
        createNavigationPath({
          route: RoutesEnum.ASSESSMENT,
          uid,
          courseId,
          assessmentId,
        })
      );
    }
  }, [assessmentId, courseId, readyToNavigate, uid]);

  const handleNavigation = (submission?: Submission): void => {
    /*const fileContents =
        submission.feedback && submission.feedback.file
          ? submission.feedback.file
          : submission.file;*/

    setReadyToNavigate(true);
    /*setAssessment({
        _id: data._id,
        name: data.name,
        type: data.type,
        script: data.script,
        privateTestCases: data.privateTestCases,
        publicTestCases: data.publicTestCases,
        questions: data.questions,
        studentTestCases: [],
        ...submission,
        file: {
          ...fileContents,
          name: data.file.name,
          language: data.file.language,
          versionIndex: data.file.versionIndex,
        },
        hideQuizPrompt: true,
      });*/
  };

  return handleNavigation;
};
