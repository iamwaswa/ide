import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { OrUndefined, TestCase } from '@types';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { ErrorToast } from '@components/error';
import React from 'react';
import { useDelete } from './hooks';
import { useStyles } from './styles';

interface IProps {
  testCase: TestCase;
  testCaseNumber: number;
  deletingTestCase: boolean;
  deleteError: OrUndefined<string>;
  deleteTestCaseAsync: (testCase: TestCase) => void;
}

export const Delete: React.FC<IProps> = ({
  testCase,
  testCaseNumber,
  deletingTestCase,
  deleteError,
  deleteTestCaseAsync,
}) => {
  const classes = useStyles({ deletingTestCase });
  const { handleDelete, handleToggleDialog, showDialog } = useDelete({
    testCase,
    deleteTestCaseAsync,
    deletingTestCase,
  });
  const [showError, setShowError] = React.useState<boolean>(true);

  const clearErrorMessage = (): void => setShowError(false);

  return (
    <>
      {deleteError && showError && (
        <ErrorToast
          errorMessage={deleteError}
          clearErrorMessage={clearErrorMessage}
        />
      )}
      <Dialog
        open={showDialog}
        aria-labelledby="delete-dialog-title"
        onClose={handleToggleDialog(false)}
      >
        <DialogTitle id="delete-dialog-title">Delete test case</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to delete test case #${testCaseNumber}? It cannot be
            recovered upon deletion.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            color="default"
            disabled={deletingTestCase}
            variant="text"
            onClick={handleToggleDialog(false)}
          >
            Cancel
          </Button>
          <Box className={classes.primaryButtonContainer}>
            <CircularProgress
              className={classes.progress}
              color="secondary"
              size={30}
            />
            <Button
              color="secondary"
              disabled={deletingTestCase}
              variant="contained"
              onClick={handleDelete}
            >
              Yes I&apos;m Sure
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Tooltip title="Delete test case" placement="left">
        <IconButton
          aria-label="Delete test case"
          onClick={handleToggleDialog(true)}
        >
          <DeleteRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </>
  );
};
