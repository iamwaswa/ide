import { Box, Typography } from '@material-ui/core';

import { ErrorToast } from '@components/error';
import { Login } from './login';
import React from 'react';
import { useLogin } from './login/hooks';
import { useStyles } from './styles';

export const Home: React.FC = () => {
  const classes = useStyles();
  const {
    loginAsInstructorAsync,
    loginAsStudentAsync,
    instructorLoggingIn,
    studentLoggingIn,
    ...error
  } = useLogin();

  return (
    <>
      <ErrorToast {...error} />
      <Box className={classes.home}>
        <Box className={classes.container}>
          <Box className="text-content">
            <Typography className="content__mainTitle" variant="h4">
              Welcome to VirtualClassroom
            </Typography>
            <Typography className="content__subTitle" variant="subtitle1">
              An educational platform that bridges the gap between learning and
              programming.
            </Typography>
            <Typography className="content__text" variant="body1">
              This application brings the IDE experience online to allow both
              instructors and students to no longer go through the hassle of
              setting up things locally.
            </Typography>
          </Box>
          <Login
            instructorLoggingIn={instructorLoggingIn}
            studentLoggingIn={studentLoggingIn}
            loginAsInstructorAsync={loginAsInstructorAsync}
            loginAsStudentAsync={loginAsStudentAsync}
          />
        </Box>
      </Box>
    </>
  );
};
