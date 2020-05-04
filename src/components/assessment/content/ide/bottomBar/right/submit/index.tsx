import { Box, Button, CircularProgress, Snackbar } from '@material-ui/core';

import { Alert } from '@material-ui/lab';
import React from 'react';
import { RoleEnum } from '@enums';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';
import { useSubmit } from './hooks';

interface IProps {
  getEditorValue: () => string;
}

export const Submit: React.FC<IProps> = ({ getEditorValue }) => {
  const { role } = useAuthContext();
  const {
    handleSubmitAsync,
    error,
    loading,
    completed,
    setCompleted,
    showError,
    // setShowError,
  } = useSubmit({ getEditorValue });
  const classes = useStyles({
    student: role === RoleEnum.STUDENT,
    submitting: loading,
  });

  const handleClose = () => setCompleted(false);

  return (
    <>
      {showError && <p>{error}</p>}
      <Box className={classes.root}>
        <Snackbar
          open={completed}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: `top`, horizontal: `center` }}
        >
          <Alert onClose={handleClose} severity="success" variant="filled">
            {role === RoleEnum.STUDENT
              ? `Your code has been submitted!`
              : `Grade submitted!`}
          </Alert>
        </Snackbar>
        <CircularProgress
          className={classes.progress}
          color="secondary"
          size={30}
        />
        <Button
          color="secondary"
          disabled={loading}
          variant="contained"
          onClick={handleSubmitAsync}
        >
          {role === RoleEnum.STUDENT ? `Submit` : `Submit grade`}
        </Button>
      </Box>
    </>
  );
};
