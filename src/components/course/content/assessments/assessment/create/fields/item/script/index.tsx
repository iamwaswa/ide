import { Action, ActionEnum } from '../../reducer';
import { Box, Typography } from '@material-ui/core';

import { Callback } from '@types';
import React from 'react';

interface IProps {
  addMarginClassName: string;
  updateFields: Callback<Action, void>;
}

export const ScriptItem: React.FC<IProps> = ({
  addMarginClassName,
  updateFields,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;

    if (!files || files.length === 0) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = (): void => {
      updateFields({
        type: ActionEnum.OTHER_FIELD_CHANGE,
        name: `script`,
        value: fileReader.result as string,
      });
    };

    fileReader.readAsText(files[0]);
  };

  return (
    <Box>
      <Typography variant="h5" className={addMarginClassName}>
        Script
      </Typography>
      <input type="file" onChange={handleChange} />
    </Box>
  );
};
