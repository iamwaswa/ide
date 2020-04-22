import * as React from 'react';

import { Box, Button, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home}>
      <Box className={classes.container}>
        <Box className="content">
          <Typography className="content__mainTitle" variant="h4">
            Welcome to IDE
          </Typography>
          <Typography className="content__subTitle" variant="subtitle1">
            An educational IDE platform that bridges the gap between learning
            and programming.
          </Typography>
          <Typography className="content__text" variant="body1">
            Say bye to the times when instructors had to make sure students all
            had the same environment setup on their devices. Or having to manage
            working with assignments on their local computers and school
            computers.
          </Typography>
          <Typography className="content__text" variant="body1">
            Students can now use this platform for all their assessment needs.
            That&apos;s right, no local setup needed. Now learning to code is
            easier and mastering skills is even better.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.signInContainer}>
          <Button color="primary" variant="contained">
            Sign in as an instructor
          </Button>
          <Button color="secondary" variant="contained">
            Sign in as a student
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
