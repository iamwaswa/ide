import { IconButton, Tooltip } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Fab } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  handleShowDialog: () => void;
  add?: boolean;
}

export const Trigger: React.FC<IProps> = ({
  handleShowDialog,
  add = false,
}) => {
  const classes = useStyles();

  return add ? (
    <Fab
      className={classes.add}
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
};
