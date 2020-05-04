import { Box, CircularProgress, Typography } from '@material-ui/core';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  load?: boolean;
  timeout?: number;
}

export const QuillLoader: React.FC<IProps> = ({
  load = false,
  timeout = 2000,
}) => {
  const [showLoader, setShowLoader] = React.useState<boolean>(load);
  const classes = useStyles();

  React.useEffect((): void => {
    setTimeout(() => {
      setShowLoader(false);
    }, timeout);
  }, [timeout]);

  return showLoader ? (
    <Box className={classes.container}>
      <CircularProgress color="primary" />
      <Typography variant="body1">Getting things ready...</Typography>
    </Box>
  ) : null;
};
