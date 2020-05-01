import { Assignment, Quiz } from '@types';

import { Box } from '@material-ui/core';
import { PageLayout } from '@layouts/page';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  location?: {
    state?: Assignment | Quiz;
  };
}

export const Assessment: React.FC<IProps> = ({ location }) => {
  const { assessmentId } = useAuthContext();
  const classes = useStyles();

  if (!assessmentId || !location?.state) {
    navigate(`/`);
    return null;
  }

  return (
    <PageLayout>
      <Box className={classes.assessment}>Assessment page will go here...</Box>
    </PageLayout>
  );
};
