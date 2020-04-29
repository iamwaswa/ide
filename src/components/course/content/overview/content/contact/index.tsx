import React from 'react';
import { Typography } from '@material-ui/core';
import { User } from '@types';

interface IProps {
  contact: User;
}

export const Contact: React.FC<IProps> = ({
  contact: { displayName, email },
}) => {
  return <Typography>{`${displayName} <${email}>`}</Typography>;
};
