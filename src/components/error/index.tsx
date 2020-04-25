import { Alert, AlertTitle } from '@material-ui/lab';
import { Callback, OrNull } from '@types';

import { Collapse } from '@material-ui/core';
import React from 'react';

interface IProps {
  errorMessage: OrNull<string>;
  clearErrorMessage: Callback<React.SyntheticEvent, void>;
}

export const ErrorToast: React.FC<IProps> = ({
  errorMessage,
  clearErrorMessage,
}) => {
  return (
    <Collapse in={errorMessage !== null}>
      <Alert severity="error" variant="filled" onClose={clearErrorMessage}>
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    </Collapse>
  );
};
