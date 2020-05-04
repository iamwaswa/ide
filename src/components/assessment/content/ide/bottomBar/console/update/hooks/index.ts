import { Callback, TestCase, TestCaseInput } from '@types';

import React from 'react';
import { useUpdateIO } from './io';
import { useUpdateUtils } from './utils';

interface IArgs {
  updating: boolean;
  testCase: TestCase;
  updateTriggerAsync: (testCase: TestCase) => void;
}

interface IUseUpdate {
  showDialog: boolean;
  testCaseInputs: Array<TestCaseInput>;
  testCaseOutput: string;
  setTestCaseInputs: React.Dispatch<React.SetStateAction<Array<TestCaseInput>>>;
  setTestCaseOutput: Callback<string, void>;
  handleToggleDialog: Callback<boolean, () => void>;
  handleUpdate: () => void;
}

export const useUpdate = ({
  testCase: { id, inputs, output },
  updating,
  updateTriggerAsync,
}: IArgs): IUseUpdate => {
  const {
    testCaseInputs,
    testCaseOutput,
    setTestCaseInputs,
    setTestCaseOutput,
  } = useUpdateIO({
    inputs,
    output,
  });
  const {
    showDialog,
    startUpdate,
    setStartUpdate,
    executeUpdateAsync,
    handleToggleDialog,
    handleUpdate,
  } = useUpdateUtils({
    testCase: { id, inputs, output },
    testCaseInputs,
    testCaseOutput,
    setTestCaseInputs,
    setTestCaseOutput,
    updateTriggerAsync,
  });

  React.useEffect(() => {
    if (startUpdate) {
      executeUpdateAsync();
    }
  }, [executeUpdateAsync, startUpdate]);

  React.useEffect(() => {
    if (!updating && startUpdate) {
      handleToggleDialog(false)();
      setStartUpdate(false);
    }
  }, [handleToggleDialog, updating, startUpdate, setStartUpdate]);

  return {
    showDialog,
    testCaseInputs,
    testCaseOutput,
    setTestCaseInputs,
    setTestCaseOutput,
    handleToggleDialog,
    handleUpdate,
  };
};
