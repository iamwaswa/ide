import { Box } from '@material-ui/core';
import { NavBarLeft } from './left';
import { NavBarRight } from './right';
import React from 'react';
import { usePathContext } from '@context/path/hooks';
import { useStyles } from './styles';

export const NavBar: React.FC = () => {
  const { path } = usePathContext();
  const classes = useStyles();

  return (
    <Box
      className={path.size === 0 ? classes.fixedNav : classes.nav}
      component="nav"
    >
      <NavBarLeft />
      <NavBarRight />
    </Box>
  );
};
