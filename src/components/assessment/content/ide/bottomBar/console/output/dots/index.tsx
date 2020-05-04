import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const Dots: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography component="span" className={classes.dot}>
        .
      </Typography>
      <Typography
        component="span"
        className={`${classes.dot} ${classes.secondDot}`}
      >
        .
      </Typography>
      <Typography
        component="span"
        className={`${classes.dot} ${classes.thirdDot}`}
      >
        .
      </Typography>
    </>
  );
};
