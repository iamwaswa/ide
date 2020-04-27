import * as React from 'react';

import { AuthContext, IUseAuthContext } from '../';

export const useAuthContext = (): IUseAuthContext => {
  const {
    role,
    setRole,
    uid,
    setUid,
    courseId,
    setCourseId,
    courseTitle,
    setCourseTitle,
    assessmentId,
    setAssessmentId,
    assessmentTitle,
    setAssessmentTitle,
  } = React.useContext(AuthContext);

  if (
    role === undefined ||
    setRole === undefined ||
    uid === undefined ||
    setUid === undefined ||
    courseId === undefined ||
    setCourseId === undefined ||
    assessmentId === undefined ||
    setAssessmentId === undefined ||
    courseTitle === undefined ||
    setCourseTitle === undefined ||
    assessmentTitle === undefined ||
    setAssessmentTitle === undefined
  ) {
    throw Error(`AuthContext is undefined`);
  }

  return {
    role,
    setRole,
    uid,
    setUid,
    courseId,
    setCourseId,
    assessmentId,
    setAssessmentId,
    courseTitle,
    setCourseTitle,
    assessmentTitle,
    setAssessmentTitle,
  };
};
