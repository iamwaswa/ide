import { Button } from '@material-ui/core';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

export const Course: React.FC = () => {
  const [readyToNavigate, setReadyToNavigate] = React.useState<boolean>(false);
  const {
    uid,
    courseId,
    assessmentId,
    assessmentTitle,
    setAssessmentId,
    setAssessmentTitle,
  } = useAuthContext();

  React.useEffect((): void => {
    if (readyToNavigate && uid && courseId && assessmentId && assessmentTitle) {
      navigate(`/session/${uid}/courses/${courseId}/${assessmentId}`);
      return;
    }
  }, [assessmentId, assessmentTitle, courseId, readyToNavigate, uid]);

  const goToAssessmentPage = (): void => {
    setReadyToNavigate(true);
    setAssessmentId(`0`);
    setAssessmentTitle(`Assignment 1`);
  };

  return (
    <PageLayout>
      <div>{courseId}</div>
      <Button onClick={goToAssessmentPage}>Assessment</Button>
    </PageLayout>
  );
};
