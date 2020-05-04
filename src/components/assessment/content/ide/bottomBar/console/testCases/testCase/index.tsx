import { Box, Card, Typography } from '@material-ui/core';
import { OrUndefined, TestCase } from '@types';

import { Header } from './header';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  testCase: TestCase;
  testCaseNumber: number;
  editTestCaseAsync: (testCase: TestCase) => void;
  editingTestCase: boolean;
  editError: OrUndefined<string>;
  deleteTestCaseAsync: (testCase: TestCase) => void;
  deletingTestCase: boolean;
  deleteError: OrUndefined<string>;
  disabled?: boolean;
}

export const TestCaseItem: React.FC<IProps> = ({
  testCase: { id, inputs, output },
  disabled = false,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.testCaseContainer}>
      <Header
        {...props}
        testCase={{ id, inputs, output }}
        disabled={disabled}
      />
      <Box className={classes.testCase}>
        <Box className={classes.input}>
          <Typography variant="body1">{`Input(s)`}</Typography>
          {inputs.map(({ name, value }) => (
            <Typography
              key={`${id}-${name}`}
              variant="body2"
            >{`${name} = ${value}`}</Typography>
          ))}
        </Box>
        <Box className={classes.output}>
          <Typography variant="body1">{`Output`}</Typography>
          <Typography variant="body2">{output}</Typography>
        </Box>
      </Box>
    </Card>
  );
};
