import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
} from '@material-ui/core';

import { Callback } from '@types';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  handleToggleDialog: Callback<boolean, () => void>;
  handleUpdate: () => void;
  updating: boolean;
  testCaseNumber?: number;
}

export const Actions: React.FC<IProps> = ({
  testCaseNumber,
  handleToggleDialog,
  handleUpdate,
  updating,
}) => {
  const classes = useStyles({ testCaseNumber, updating });

  return (
    <DialogActions className={classes.dialogActions}>
      <Button
        disabled={updating}
        color="default"
        variant="text"
        onClick={handleToggleDialog(false)}
      >
        Cancel
      </Button>
      <Box className={classes.primaryButtonContainer}>
        <CircularProgress
          className={classes.progress}
          color="primary"
          size={30}
        />
        <Button
          disabled={updating}
          color="primary"
          variant="contained"
          onClick={handleUpdate}
        >
          {testCaseNumber ? `Edit` : `Add`}
        </Button>
      </Box>
    </DialogActions>
  );
};
