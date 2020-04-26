import { Box, Button, CircularProgress } from '@material-ui/core';

import { Callback } from '@types';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  container: string;
  instructorLoggingIn: boolean;
  studentLoggingIn: boolean;
  loginAsInstructorAsync: Callback<React.MouseEvent, void>;
  loginAsStudentAsync: Callback<React.MouseEvent, void>;
}

export const Login: React.FC<IProps> = ({
  container,
  instructorLoggingIn,
  studentLoggingIn,
  loginAsInstructorAsync,
  loginAsStudentAsync,
}) => {
  const classes = useStyles();

  return (
    <Box className={container}>
      <Box className={classes.signInContainer}>
        <Box className={`button-container ${classes.buttonContainer}`}>
          {instructorLoggingIn && (
            <CircularProgress
              className={classes.spinner}
              color="primary"
              size={20}
            />
          )}
          <Button
            color="primary"
            disabled={instructorLoggingIn || studentLoggingIn}
            variant="contained"
            onClick={loginAsInstructorAsync}
          >
            Login as an instructor
          </Button>
        </Box>
        <Box className={`button-container ${classes.buttonContainer}`}>
          {studentLoggingIn && (
            <CircularProgress
              className={classes.spinner}
              color="secondary"
              size={20}
            />
          )}
          <Button
            color="secondary"
            disabled={studentLoggingIn || instructorLoggingIn}
            variant="contained"
            onClick={loginAsStudentAsync}
          >
            Login as a student
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
