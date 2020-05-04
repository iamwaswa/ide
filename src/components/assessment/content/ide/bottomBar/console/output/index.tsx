import { Box, Typography } from '@material-ui/core';

import { ConsoleComponent } from '../component';
import { Dots } from './dots';
import { OutputDisplay } from './display';
import React from 'react';

interface IProps {
  runningCode: boolean;
  compilerResult?: any;
}

export const Output: React.FC<IProps> = ({ compilerResult, runningCode }) => {
  const consoleOutput = React.useMemo<JSX.Element>((): JSX.Element => {
    if (runningCode) {
      return (
        <Typography>
          Running
          <Dots />
        </Typography>
      );
    }

    return compilerResult ? (
      <OutputDisplay compileCode={compilerResult?.compileCode} />
    ) : (
      <Box>
        Click{' '}
        <Box component="span" fontWeight="bold">
          run code
        </Box>{' '}
        to execute your code and see the output here!
      </Box>
    );
  }, [runningCode, compilerResult]);

  return <ConsoleComponent>{consoleOutput}</ConsoleComponent>;
};
