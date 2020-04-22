import * as React from 'react';

import { PageLayout } from '@layouts/page';
import { Typography } from '@material-ui/core';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout>
      <Typography>Whoops! Looks like you got lost.</Typography>
    </PageLayout>
  );
};

NotFoundPage.displayName = `NotFoundPage`;

export default NotFoundPage;
