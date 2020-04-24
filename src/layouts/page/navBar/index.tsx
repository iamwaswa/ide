import { Box } from '@material-ui/core';
import { NavBarLeft } from './left';
import React from 'react';
import { useStyles } from './styles';

export const NavBar: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.nav} component="nav">
      <NavBarLeft />
    </Box>
  );
};
