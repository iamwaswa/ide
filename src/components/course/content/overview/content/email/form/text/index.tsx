import { Callback } from '@types';
import React from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  id: string;
  label: string;
  value: string;
  onChange: Callback<React.ChangeEvent<HTMLInputElement>, void>;
  multiline?: boolean;
  rows?: number;
  variant?: `standard` | `filled` | `outlined`;
}

export const Text: React.FC<IProps> = ({ variant = `outlined`, ...props }) => {
  return (
    <TextField
      fullWidth={true}
      margin="normal"
      type="text"
      variant={variant}
      {...props}
    />
  );
};
