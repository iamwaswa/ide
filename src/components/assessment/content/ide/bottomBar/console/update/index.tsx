import { Dialog, DialogTitle } from '@material-ui/core';

import { Actions } from './actions';
import { Content } from './content';
import { ErrorToast } from '@components/error';
import React from 'react';
import { TestCase } from '@types';
import { Trigger } from './trigger';
import { useUpdate } from './hooks';

interface IProps {
  testCase: TestCase;
  updating: boolean;
  updateTriggerAsync: (testCase: TestCase) => void;
  error?: string;
  testCaseNumber?: number;
}

export const Update: React.FC<IProps> = ({
  testCase,
  testCaseNumber,
  updating,
  error,
  updateTriggerAsync,
}) => {
  const {
    showDialog,
    testCaseInputs,
    testCaseOutput,
    setTestCaseInputs,
    setTestCaseOutput,
    handleToggleDialog,
    handleUpdate,
  } = useUpdate({ testCase, updating, updateTriggerAsync });
  const [showError, setShowError] = React.useState<boolean>(true);

  const clearErrorMessage = (): void => setShowError(false);

  return (
    <>
      {error && showError && (
        <ErrorToast
          clearErrorMessage={clearErrorMessage}
          errorMessage={error}
        />
      )}
      <Dialog
        open={showDialog}
        aria-labelledby="update-dialog-title"
        maxWidth={false}
        onClose={handleToggleDialog(false)}
      >
        <DialogTitle id="update-dialog-title">{`${
          testCaseNumber ? `Edit` : `Add`
        }${updating ? `ing` : ``} test case${
          updating ? ` ...` : ``
        }`}</DialogTitle>
        <Content
          testCaseInputs={testCaseInputs}
          testCaseOutput={testCaseOutput}
          setTestCaseInputs={setTestCaseInputs}
          setTestCaseOutput={setTestCaseOutput}
        />
        <Actions
          testCaseNumber={testCaseNumber}
          handleToggleDialog={handleToggleDialog}
          handleUpdate={handleUpdate}
          updating={updating}
        />
      </Dialog>
      <Trigger handleShowDialog={handleToggleDialog(true)} />
    </>
  );
};
