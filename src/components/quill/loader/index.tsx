import { Box, CircularProgress, Typography } from '@material-ui/core';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  showLoader: boolean;
  hideLoader?: () => void;
  timeout?: number;
}

export const QuillLoader: React.FC<IProps> = ({
  showLoader,
  hideLoader,
  timeout = 1000,
}) => {
  const classes = useStyles();

  React.useEffect((): void => {
    setTimeout(() => {
      hideLoader?.();
    }, timeout);
  }, [timeout]);

  return showLoader ? (
    <Box className={classes.container}>
      <CircularProgress color="primary" />
      <Typography variant="body1">Getting things ready...</Typography>
    </Box>
  ) : null;
};
