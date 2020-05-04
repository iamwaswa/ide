import { Callback, TestCase } from '@types';

import React from 'react';

interface IArgs {
  testCase: TestCase;
  deletingTestCase: boolean;
  deleteTestCaseAsync: (testCase: TestCase) => void;
}

interface IUseDelete {
  handleToggleDialog: Callback<boolean, () => void>;
  handleDelete: () => void;
  showDialog: boolean;
}

export const useDelete = ({
  testCase,
  deleteTestCaseAsync,
  deletingTestCase,
}: IArgs): IUseDelete => {
  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [startDelete, setStartDelete] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (startDelete) {
      deleteTestCaseAsync(testCase);
    }
  }, [deleteTestCaseAsync, startDelete, testCase]);

  React.useEffect(() => {
    if (!deletingTestCase && startDelete) {
      setShowDialog(false);
      setStartDelete(false);
    }
  }, [deletingTestCase, startDelete]);

  const handleDelete = (): void => setStartDelete(true);

  const handleToggleDialog = (state: boolean): (() => void) => (): void =>
    setShowDialog(state);

  return {
    handleToggleDialog,
    handleDelete,
    showDialog,
  };
};
