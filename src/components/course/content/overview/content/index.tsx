import { Box, Typography } from '@material-ui/core';
import { CourseOverview, User } from '@types';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  overview: CourseOverview;
}

export const Content: React.FC<IProps> = ({ overview }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} paragraph={true} variant="body1">
        Instructor
      </Typography>
      <Box className={classes.content}>{overview.instructor.displayName}</Box>
      <Typography className={classes.heading} paragraph={true} variant="body1">
        Teaching Assistants
      </Typography>
      <Box className={classes.teachingAssistants}>
        {overview.teachingAssistants.map(({ email, displayName }: User) => (
          <Box key={email} className={classes.content}>
            {displayName}
          </Box>
        ))}
      </Box>
      <Box className={classes.content}>{overview.syllabus}</Box>
      <Box className={classes.content}>{overview.courseDetails}</Box>
    </Box>
  );
};
