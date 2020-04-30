import { Action, ActionEnum } from '../../reducer';
import { Box, Button, Typography } from '@material-ui/core';

import { Callback } from '@types';
import React from 'react';
import { Utils } from '@utils';

interface IProps {
  addMarginClassName: string;
  updateFields: Callback<Action, void>;
}

export const ScriptItem: React.FC<IProps> = ({
  addMarginClassName,
  updateFields,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    Utils.readSingleFileAsText(event.target.files, (result: string): void => {
      updateFields({
        type: ActionEnum.OTHER_FIELD_CHANGE,
        name: `script`,
        value: result,
      });
    });
  };

  return (
    <Box>
      <Typography variant="h5" className={addMarginClassName}>
        Script
      </Typography>
      <input
        accept="/*"
        id="upload-script"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="upload-script">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={addMarginClassName}
        >
          Upload script
        </Button>
      </label>
    </Box>
  );
};
