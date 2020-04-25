import { PageLayout } from '@layouts/page';
import React from 'react';

interface IProps {
  path: string;
}

export const Course: React.FC<IProps> = () => {
  return (
    <PageLayout>
      <div>Course page will go here...</div>
    </PageLayout>
  );
};
