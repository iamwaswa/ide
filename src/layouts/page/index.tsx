import { Box } from '@material-ui/core';
import { NavBar } from './navBar';
import React from 'react';
import { useStyles } from './styles';

export const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Box className={classes.main} component="main">
        {children}
      </Box>
    </>
  );
};
