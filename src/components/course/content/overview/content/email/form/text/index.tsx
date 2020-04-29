import { Callback } from '@types';
import React from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  id: string;
  label: string;
  multiline?: boolean;
  rows?: number;
  value: string;
  onChange: Callback<React.ChangeEvent<HTMLInputElement>, void>;
}

export const Text: React.FC<IProps> = (props) => {
  return <TextField fullWidth={true} margin="dense" type="text" {...props} />;
};
