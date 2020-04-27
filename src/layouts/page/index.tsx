import { AppBar, Box, Toolbar } from '@material-ui/core';

import { NavBar } from './navBar';
import React from 'react';
import { useStyles } from './styles';

export const PageLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Box className={classes.main} component="main">
        {children}
      </Box>
    </>
  );
};
