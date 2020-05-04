import { Box, Button, CircularProgress } from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { useRunCode } from './hooks';
import { useStyles } from './styles';

interface IProps {
  getEditorValue: () => string;
  runCodeAsync: () => void;
  runningCode: boolean;
  runCodeError?: string;
}

export const RunCode: React.FC<IProps> = ({
  getEditorValue,
  runningCode,
  runCodeAsync,
  runCodeError,
}) => {
  const classes = useStyles({
    runningCode,
  });
  const [showError, setShowError] = React.useState(() => false);
  const { handleRunCodeAsync } = useRunCode({ runCodeAsync, getEditorValue });

  React.useEffect(() => {
    if (runCodeError) {
      setShowError(true);
    }
  }, [runCodeError]);

  return (
    <>
      {showError && <p>{runCodeError}</p>}
      <Box className={classes.root}>
        <CircularProgress
          className={classes.progress}
          color="primary"
          size={30}
        />
        <Button
          startIcon={<PlayArrowIcon />}
          color="primary"
          disabled={runningCode}
          variant="contained"
          onClick={handleRunCodeAsync}
        >
          Run Code
        </Button>
      </Box>
    </>
  );
};
