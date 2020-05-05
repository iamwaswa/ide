import { Box } from '@material-ui/core';
import { ConsoleComponent } from '../component';
import React from 'react';
import { RoleEnum } from '@enums';
import { TestCaseItem } from './testCase';
import { Update } from '../update';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';
import { useTestCases } from './hooks';

export const TestCases = () => {
  const { role } = useAuthContext();
  const {
    testCases,
    addingTestCase,
    addError,
    addTestCaseAsync,
    editingTestCase,
    editError,
    editTestCaseAsync,
    deletingTestCase,
    deleteError,
    deleteTestCaseAsync,
  } = useTestCases();
  const classes = useStyles({ numTestCases: testCases.length });

  return (
    <ConsoleComponent>
      {role === RoleEnum.STUDENT && (
        <>
          <Box className={classes.testCasesContainer}>
            {testCases.map((testCase, index) => (
              <TestCaseItem
                key={testCase.id}
                testCase={testCase}
                disabled={addingTestCase || editingTestCase || deletingTestCase}
                testCaseNumber={index + 1}
                editTestCaseAsync={editTestCaseAsync}
                editingTestCase={editingTestCase}
                editError={editError}
                deleteTestCaseAsync={deleteTestCaseAsync}
                deletingTestCase={deletingTestCase}
                deleteError={deleteError}
              />
            ))}
          </Box>
          <Box className={classes.addMargin}>
            <Update
              add={true}
              testCase={{ id: ``, inputs: [], output: `` }}
              updating={addingTestCase}
              error={addError}
              updateTriggerAsync={addTestCaseAsync}
            />
          </Box>
        </>
      )}
    </ConsoleComponent>
  );
};
