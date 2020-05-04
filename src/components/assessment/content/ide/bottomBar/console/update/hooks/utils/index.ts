import { Callback, TestCase, TestCaseInput } from '@types';

import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';

interface IArgs {
  testCase: TestCase;
  testCaseInputs: Array<TestCaseInput>;
  testCaseOutput: string;
  setTestCaseInputs: Callback<Array<TestCaseInput>, void>;
  setTestCaseOutput: Callback<string, void>;
  updateTriggerAsync: (testCase: TestCase) => void;
}

interface IUseUpdateUtils {
  showDialog: boolean;
  startUpdate: boolean;
  setStartUpdate: Callback<boolean, void>;
  executeUpdateAsync: () => void;
  handleToggleDialog: Callback<boolean, () => void>;
  handleUpdate: () => void;
}

export const useUpdateUtils = ({
  testCase: { id, inputs, output },
  testCaseInputs,
  testCaseOutput,
  setTestCaseInputs,
  setTestCaseOutput,
  updateTriggerAsync,
}: IArgs): IUseUpdateUtils => {
  const { assessment } = useAssessmentContext();
  const [showDialog, setShowDialog] = React.useState(() => false);
  const [startUpdate, setStartUpdate] = React.useState(() => false);

  const executeUpdateAsync = async () => {
    updateTriggerAsync({
      id,
      inputs: testCaseInputs,
      output: testCaseOutput,
    });
  };

  const handleToggleDialog = (state: boolean): (() => void) => (): void => {
    setShowDialog(state);

    if (state === false) {
      setTestCaseInputs(assessment?.testCaseSchema?.inputs ?? inputs);
      setTestCaseOutput(assessment?.testCaseSchema?.output ?? output);
    }
  };

  const handleUpdate = (): void => setStartUpdate(true);

  return {
    showDialog,
    startUpdate,
    setStartUpdate,
    executeUpdateAsync,
    handleToggleDialog,
    handleUpdate,
  };
};
