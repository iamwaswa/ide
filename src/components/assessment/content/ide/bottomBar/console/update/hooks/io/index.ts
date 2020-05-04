import { Callback, TestCaseInput } from '@types';

import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';

interface IArgs {
  inputs: Array<TestCaseInput>;
  output: string;
}

interface IUseUpdateIO {
  testCaseInputs: Array<TestCaseInput>;
  testCaseOutput: string;
  setTestCaseInputs: React.Dispatch<React.SetStateAction<Array<TestCaseInput>>>;
  setTestCaseOutput: Callback<string, void>;
}

export const useUpdateIO = ({ inputs, output }: IArgs): IUseUpdateIO => {
  const { assessment } = useAssessmentContext();
  const [testCaseInputs, setTestCaseInputs] = React.useState<
    Array<TestCaseInput>
  >(assessment?.testCaseSchema?.inputs ?? inputs);
  const [testCaseOutput, setTestCaseOutput] = React.useState<string>(
    assessment?.testCaseSchema?.output ?? output
  );

  React.useEffect((): void => {
    setTestCaseInputs(assessment?.testCaseSchema?.inputs ?? inputs);
  }, [assessment, inputs]);

  React.useEffect((): void => {
    setTestCaseOutput(assessment?.testCaseSchema?.output ?? output);
  }, [assessment, output]);

  return {
    testCaseInputs,
    testCaseOutput,
    setTestCaseInputs,
    setTestCaseOutput,
  };
};
