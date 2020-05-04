import { IconButton, Tooltip } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Fab } from '@material-ui/core';
import React from 'react';

interface IProps {
  handleShowDialog: () => void;
  schema?: boolean;
}

export const Trigger: React.FC<IProps> = ({
  handleShowDialog,
  schema = false,
}) =>
  schema ? (
    <Fab
      color="primary"
      aria-label="add"
      variant="extended"
      onClick={handleShowDialog}
    >
      <AddIcon />
      Add test case
    </Fab>
  ) : (
    <Tooltip title="Update test case" placement="left">
      <IconButton aria-label="Update test case" onClick={handleShowDialog}>
        <EditRoundedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
