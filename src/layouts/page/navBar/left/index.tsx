import { Box } from '@material-ui/core';
import { NavigationMenu } from './navigationMenu';
import { PaletteTypeToggle } from './paletteTypeToggle';
import React from 'react';
import { useStyles } from './styles';

export const NavBarLeft: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.left}>
      <PaletteTypeToggle />
      <NavigationMenu />
    </Box>
  );
};
