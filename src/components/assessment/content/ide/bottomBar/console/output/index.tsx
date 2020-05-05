import { Box, Typography } from '@material-ui/core';

import { ConsoleComponent } from '../component';
import { Dots } from './dots';
import { OutputDisplay } from './display';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  runningCode: boolean;
  compilerResult?: any;
}

export const Output: React.FC<IProps> = ({ compilerResult, runningCode }) => {
  const classes = useStyles();

  const consoleOutput = React.useMemo<JSX.Element>((): JSX.Element => {
    if (runningCode) {
      return (
        <Typography className={classes.color}>
          Running
          <Dots />
        </Typography>
      );
    }

    return compilerResult ? (
      <OutputDisplay compileCode={compilerResult?.compileCode} />
    ) : (
      <Box className={classes.color}>
        Click{' '}
        <Box className={classes.color} component="span" fontWeight="bold">
          run code
        </Box>{' '}
        to execute the code above and see the output here!
      </Box>
    );
  }, [runningCode, compilerResult]);

  return <ConsoleComponent>{consoleOutput}</ConsoleComponent>;
};
