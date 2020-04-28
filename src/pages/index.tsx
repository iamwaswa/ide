import { Home } from '@components/home';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { RoutesEnum } from '@enums';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

const IndexPage: React.FC = () => {
  const { role, uid } = useAuthContext();

  if (role !== null && uid) {
    navigate(RoutesEnum.COURSES.replace(/:uid/, uid));
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
