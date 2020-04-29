import { Box, Typography } from '@material-ui/core';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  title: string;
  extraContentClassName?: string;
}

export const ContentComponent: React.FC<IProps> = ({
  extraContentClassName = ``,
  children,
  title,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.heading} paragraph={true} variant="h6">
        {title}
      </Typography>
      <Box className={`${classes.content} ${extraContentClassName}`}>
        {children}
      </Box>
    </>
  );
};
