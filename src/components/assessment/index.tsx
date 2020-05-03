import { Assignment, OrUndefined, Quiz } from '@types';

import { AssessmentContextProvider } from './context';
import { Content } from './content';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

interface IProps {
  location?: {
    state?: Assignment | Quiz;
  };
}

export const Assessment: React.FC<IProps> = ({ location }) => {
  const { assessmentId } = useAuthContext();
  const assessment = React.useRef<OrUndefined<Assignment | Quiz>>(
    location?.state ?? undefined
  );

  if (!assessmentId || !location?.state) {
    navigate(`/`);
    return null;
  }

  return (
    <PageLayout>
      <AssessmentContextProvider initialAssessment={assessment.current}>
        <Content />
      </AssessmentContextProvider>
    </PageLayout>
  );
};
