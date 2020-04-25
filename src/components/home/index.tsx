import { Box, Button, Typography } from '@material-ui/core';

import { ErrorToast } from '@components/error';
import React from 'react';
import { useLogin } from './hooks/login';
import { useStyles } from './styles';

export const Home: React.FC = () => {
  const classes = useStyles();
  const { loginAsInstructorAsync, loginAsStudentAsync, ...error } = useLogin();

  return (
    <>
      <ErrorToast {...error} />
      <Box className={classes.home}>
        <Box className={classes.container}>
          <Box className="content">
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
        </Box>
        <Box className={classes.container}>
          <Box className={classes.signInContainer}>
            <Button
              color="primary"
              variant="contained"
              onClick={loginAsInstructorAsync}
            >
              Login as an instructor
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={loginAsStudentAsync}
            >
              Login as a student
            </Button>
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.secondaryContent}>
            <Box className="secondaryContent__container">
              <Typography className="secondaryContent__mainTitle" variant="h5">
                Title goes here
              </Typography>
              <Typography className="secondaryContent__text" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                hic, culpa cumque, fugit, vel sed eaque molestiae neque error
                reiciendis architecto voluptatibus quo ad veritatis officia.
                Facilis velit laborum quas harum corrupti aut error quis fugit,
                in, quidem deserunt deleniti, porro repellendus eaque dolor
                ipsum aperiam magnam quod molestias sint.
              </Typography>
            </Box>
            <Box className="secondaryContent__container">
              <Typography className="secondaryContent__mainTitle" variant="h5">
                Title goes here
              </Typography>
              <Typography className="secondaryContent__text" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                hic, culpa cumque, fugit, vel sed eaque molestiae neque error
                reiciendis architecto voluptatibus quo ad veritatis officia.
                Facilis velit laborum quas harum corrupti aut error quis fugit,
                in, quidem deserunt deleniti, porro repellendus eaque dolor
                ipsum aperiam magnam quod molestias sint.
              </Typography>
            </Box>
            <Box className="secondaryContent__container">
              <Typography className="secondaryContent__mainTitle" variant="h5">
                Title goes here
              </Typography>
              <Typography className="secondaryContent__text" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                hic, culpa cumque, fugit, vel sed eaque molestiae neque error
                reiciendis architecto voluptatibus quo ad veritatis officia.
                Facilis velit laborum quas harum corrupti aut error quis fugit,
                in, quidem deserunt deleniti, porro repellendus eaque dolor
                ipsum aperiam magnam quod molestias sint.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
