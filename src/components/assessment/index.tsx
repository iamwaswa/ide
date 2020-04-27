import { Button } from '@material-ui/core';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

export const Assessment: React.FC = () => {
  const {
    uid,
    courseId,
    assessmentId,
    assessmentTitle,
    setAssessmentId,
    setAssessmentTitle,
  } = useAuthContext();

  React.useEffect((): void => {
    if (uid && courseId && assessmentId && assessmentTitle) {
      navigate(`/session/${uid}/courses/${courseId}/${assessmentId}`);
      return;
    }
  }, [uid, courseId, assessmentId, assessmentTitle]);

  const goToAssessmentPage = (): void => {
    setAssessmentId(`0`);
    setAssessmentTitle(`Assignment 1`);
  };
  return (
    <PageLayout>
      <div>Assessment page will go here...</div>
      <Button onClick={goToAssessmentPage}>Assessment</Button>
    </PageLayout>
  );
};
