import { Home } from '@components/home';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { RoutesEnum } from '@enums';
import { Utils } from '@utils';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

const IndexPage: React.FC = () => {
  const { role, uid } = useAuthContext();

  if (role !== null && uid) {
    navigate(Utils.createNavigationPath({ route: RoutesEnum.COURSES, uid }));
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
