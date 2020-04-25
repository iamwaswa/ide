import { Home } from '@components/home';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '@context/auth/hooks';

const IndexPage: React.FC = () => {
  const { role, uid } = useAuth();

  if (role !== null && uid) {
    navigate(`/session/courses/${uid}`);
    return null;
  }

  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

IndexPage.displayName = `HomePage`;

export default IndexPage;
