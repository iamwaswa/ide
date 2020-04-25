import { Box } from '@material-ui/core';
import { Course } from '@types';
import React from 'react';

interface IProps {
  data: Array<Course>;
}

export const Items: React.FC<IProps> = ({ data }) => {
  return <Box>{JSON.stringify(data)}</Box>;
};
