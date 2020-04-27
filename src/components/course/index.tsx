import { PageLayout } from '@layouts/page';
import React from 'react';
import { useLocation } from '@reach/router';

export const Course: React.FC = () => {
  const location = useLocation();

  return (
    <PageLayout>
      <div>{`${location.state?.courseId ?? `courseId`}`}</div>
    </PageLayout>
  );
};
