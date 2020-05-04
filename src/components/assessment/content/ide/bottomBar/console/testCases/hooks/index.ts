import { OrUndefined, TestCase } from '@types';

import React from 'react';
import { useAddTestCase } from './add';
import { useAssessmentContext } from '@components/assessment/context/hooks';
import { useDeleteTestCase } from './delete';
import { useEditTestCase } from './edit';

interface IUseTestCases {
  testCases: Array<TestCase>;
  addingTestCase: boolean;
  addError: OrUndefined<string>;
  addTestCaseAsync: (testCase: TestCase) => void;
  editingTestCase: boolean;
  editError: OrUndefined<string>;
  editTestCaseAsync: (testCase: TestCase) => void;
  deletingTestCase: boolean;
  deleteError: OrUndefined<string>;
  deleteTestCaseAsync: (testCase: TestCase) => void;
}

export const useTestCases = (): IUseTestCases => {
  const { assessment } = useAssessmentContext();
  const [testCases, setTestCases] = React.useState<Array<TestCase>>(
    assessment?.submissions?.[0].testCases ?? []
  );

  React.useEffect(() => {
    setTestCases(assessment?.submissions?.[0].testCases ?? []);
  }, [assessment]);

  const [addingTestCase, addError, addTestCaseAsync] = useAddTestCase();
  const [editingTestCase, editError, editTestCaseAsync] = useEditTestCase();
  const [
    deletingTestCase,
    deleteError,
    deleteTestCaseAsync,
  ] = useDeleteTestCase();

  return {
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
  };
};
