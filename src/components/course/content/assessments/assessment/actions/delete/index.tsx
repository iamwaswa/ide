import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDeleteAssessment } from './hooks';

export const Delete: React.FC<IProps> = () => {
  const [open, setOpen] = React.useState(false);
  const { deleteAssessmentAsync } = useDeleteAssessment();

  const handleClickOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  const handleDeleteAsync = async (): Promise<void> =>
    deleteAssessmentAsync(handleClose);

  return (
    <Box>
      <IconButton>
        <DeleteIcon color="secondary" onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete Assessment'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once the Assessment is deleted, it will not be able to recover files
            nor submissions. Do you want to delete the assessment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteAsync} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
