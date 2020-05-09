import { Content } from './content';
import { CourseOverview } from '@types';
import { Fade } from '@material-ui/core';
import React from 'react';

interface IProps {
  overview: CourseOverview;
  subtitle: string;
}

export const Overview: React.FC<IProps> = ({ overview, subtitle }) => (
  <Fade in={true} timeout={600} mountOnEnter unmountOnExit>
    <Content overview={overview} subtitle={subtitle} />
  </Fade>
);
