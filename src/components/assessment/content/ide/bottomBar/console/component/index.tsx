import { Box } from '@material-ui/core';
import React from 'react';
import { useIDEStylesContext } from '../../../context/hooks';
import { useStyles } from './styles';

export const ConsoleComponent: React.FC = ({ children }) => {
  const borderRadius = useIDEStylesContext();
  const classes = useStyles({ borderRadius });

  return <Box className={classes.root}>{children}</Box>;
};
