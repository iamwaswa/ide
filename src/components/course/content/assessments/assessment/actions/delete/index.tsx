import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDeleteAssessment } from './hooks';

interface IProps {
  type: AssessmentEnum;
}

export const Delete: React.FC<IProps> = ({ type }) => {
  const [open, setOpen] = React.useState(false);
  const { deleteAssessmentAsync } = useDeleteAssessment();

  const handleClickOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  const handleDeleteAsync = async (): Promise<void> =>
    deleteAssessmentAsync(handleClose);

  return (
    <Box>
      <Tooltip placement="top" title={`Delete ${type.toLowerCase()}`}>
        <IconButton onClick={handleClickOpen}>
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-title"
        aria-describedby="delete-description"
      >
        <DialogTitle id="delete-title">{`Delete ${type.toLowerCase()}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-description">
            Once the {type.toLowerCase()} is deleted, all submissions will be
            deleted with it. Are you sure you want to delete it?
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
