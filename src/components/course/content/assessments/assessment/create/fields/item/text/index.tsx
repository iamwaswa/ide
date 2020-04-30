import { Callback } from '@types';
import React from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  label: string;
  name: string;
  handleChange: Callback<
    string,
    Callback<React.ChangeEvent<HTMLInputElement>, void>
  >;
  disabled?: boolean;
  type?: string;
  value?: string | number;
}

export const TextItem: React.FC<IProps> = ({
  disabled = false,
  type = `text`,
  handleChange,
  ...props
}) => {
  return (
    <TextField
      {...props}
      id={props.name}
      disabled={disabled}
      type={type}
      variant="outlined"
      onChange={handleChange(props.name)}
    />
  );
};
