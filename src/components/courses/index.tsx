import { PageLayout } from '@layouts/page';
import React from 'react';

interface IProps {
  path: string;
}

export const Courses: React.FC<IProps> = () => {
  return (
    <PageLayout>
      <div>Courses page will go here...</div>
    </PageLayout>
  );
};
