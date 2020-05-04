import { Box } from '@material-ui/core';
import React from 'react';
import { RunCode } from './runCode';
import { Submit } from './submit';
import { useStyles } from './styles';

interface IProps {
  getEditorValue: () => string;
  runCodeAsync: () => void;
  runningCode: boolean;
  runCodeError?: string;
}

export const BottomBarRight: React.FC<IProps> = ({
  getEditorValue,
  runCodeAsync,
  runningCode,
  runCodeError,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.buttons}>
      <RunCode
        getEditorValue={getEditorValue}
        runningCode={runningCode}
        runCodeAsync={runCodeAsync}
        runCodeError={runCodeError}
      />
      <Submit getEditorValue={getEditorValue} />
    </Box>
  );
};
