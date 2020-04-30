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
  helperText?: string;
  type?: string;
  value?: string | number;
  variant?: `outlined` | `standard` | `filled`;
}

export const TextItem: React.FC<IProps> = ({
  type = `text`,
  variant = `standard`,
  handleChange,
  ...props
}) => {
  return (
    <TextField
      {...props}
      id={props.name}
      type={type}
      variant={variant}
      onChange={handleChange(props.name)}
    />
  );
};
