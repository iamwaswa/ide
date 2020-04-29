import { Content } from './content';
import { CourseOverview } from '@types';
import { Fade } from '@material-ui/core';
import React from 'react';

interface IProps {
  overview: CourseOverview;
  subTitle: string;
}

export const Overview: React.FC<IProps> = ({ overview, subTitle }) => (
  <Fade in={true} timeout={600} mountOnEnter unmountOnExit>
    <Content overview={overview} subTitle={subTitle} />
  </Fade>
);
