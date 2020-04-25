import { Box, Typography } from '@material-ui/core';

import { Items } from './items';
import { PageLayout } from '@layouts/page';
import React from 'react';
import data from './data.json';
import { useAuth } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  path: string;
}

export const Courses: React.FC<IProps> = () => {
  const { role } = useAuth();
  const classes = useStyles();

  return (
    <PageLayout>
      <Box className={classes.container}>
        <Box className="content">
          <Typography variant="h4">{`Welcome ${role
            ?.substring(0, 1)
            .toUpperCase()}${role?.substring(1).toLowerCase()}`}</Typography>
          <Items data={data} />
        </Box>
      </Box>
    </PageLayout>
  );
};
