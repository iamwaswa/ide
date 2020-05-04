import { Box, Typography } from '@material-ui/core';

import React from 'react';
import { transformCPUTime } from './utils';
import { useStyles } from './styles';

interface IProps {
  outputs: Array<any>;
  title: string;
}

export const TestCases: React.FC<IProps> = ({ outputs, title }) => {
  const classes = useStyles();

  return (
    <>
      {outputs.map(
        ({ output, expectedOutput, cpuTime, memory }: any, index: number) => (
          <Box key={`${title}-${index}`} className={classes.root}>
            <Typography
              className={classes.testCaseTitle}
              variant="subtitle2"
            >{`Test case #${index + 1}`}</Typography>
            <Box className={classes.grid}>
              <Typography variant="body2">Output:</Typography>
              <Typography variant="body1">{output}</Typography>
            </Box>
            <Box className={classes.grid}>
              <Typography variant="body2">Expected output:</Typography>
              <Typography variant="body1">{expectedOutput}</Typography>
            </Box>
            <Box className={classes.meta}>
              <Typography
                className={classes.cpuTime}
                variant="body2"
              >{`CPU time spent to run the test case: ${transformCPUTime(
                cpuTime
              )}.`}</Typography>
              <Typography variant="body2">{`Memory used to run the test case: ${
                memory ? memory : 0
              } bytes.`}</Typography>
            </Box>
          </Box>
        )
      )}
    </>
  );
};
