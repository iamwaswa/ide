import { Box } from '@material-ui/core';
import { ContentComponent } from '../component';
import { CourseOverview } from '@types';
import React from 'react';

interface IProps {
  containerClassName: string;
  overview: CourseOverview;
}

export const RightContent: React.FC<IProps> = ({
  containerClassName,
  overview,
}) => (
  <Box className={containerClassName}>
    <ContentComponent title="Syllabus">{overview.syllabus}</ContentComponent>
    <ContentComponent title="Course details">
      {overview.courseDetails}
    </ContentComponent>
  </Box>
);
