import { PageLayout } from '@layouts/page';
import React from 'react';

interface IProps {
  path: string;
}

export const Assessment: React.FC<IProps> = () => {
  return (
    <PageLayout>
      <div>Assessment page will go here...</div>
    </PageLayout>
  );
};
