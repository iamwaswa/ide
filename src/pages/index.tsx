import { Home } from '@components/home';
import { PageLayout } from '@layouts/page';
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

IndexPage.displayName = `HomePage`;

export default IndexPage;
