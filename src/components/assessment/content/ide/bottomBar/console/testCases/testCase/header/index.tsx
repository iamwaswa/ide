import { Box, Typography } from '@material-ui/core';
import { OrUndefined, TestCase } from '@types';

import { Delete } from './delete';
import React from 'react';
import { Update } from '../../../update';
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

export const Header: React.FC<IProps> = ({
  testCase,
  testCaseNumber,
  disabled = false,
  editingTestCase,
  editError,
  editTestCaseAsync,
  deleteTestCaseAsync,
  deletingTestCase,
  deleteError,
}) => {
  const classes = useStyles({ disabled });

  return (
    <Box className={classes.testCaseHeader}>
      <Typography variant="subtitle2">{`#${testCaseNumber}`}</Typography>
      {!disabled && (
        <Box className={classes.icons}>
          <Update
            testCaseNumber={testCaseNumber}
            testCase={testCase}
            updating={editingTestCase}
            error={editError}
            updateTriggerAsync={editTestCaseAsync}
          />
          <Box>
            <Delete
              testCase={testCase}
              testCaseNumber={testCaseNumber}
              deletingTestCase={deletingTestCase}
              deleteError={deleteError}
              deleteTestCaseAsync={deleteTestCaseAsync}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
