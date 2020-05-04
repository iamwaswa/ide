import { Callback } from '@types';
import React from 'react';
// import { useSubmitMutation } from './mutation';

interface IArgs {
  getEditorValue: () => string;
}

interface IUseSubmit {
  handleSubmitAsync: () => void;
  loading: boolean;
  completed: boolean;
  setCompleted: Callback<boolean, void>;
  showError: boolean;
  setShowError: Callback<boolean, void>;
  error?: string;
}

export const useSubmit = ({ getEditorValue }: IArgs): IUseSubmit => {
  // const { handleSubmitAsync, data, loading, error } = useSubmitMutation(
  //   getEditorValue
  // );
  const [completed, setCompleted] = React.useState(() => false);
  const [showError, setShowError] = React.useState(() => false);
  console.log(getEditorValue);

  // React.useEffect(() => {
  //   if (data) {
  //     setCompleted(true);
  //   }
  // }, [data]);

  // React.useEffect(() => {
  //   if (error) {
  //     setShowError(true);
  //   }
  // }, [error]);

  return {
    handleSubmitAsync: (): void => console.log(`Submitting`),
    loading: false,
    completed,
    setCompleted,
    showError,
    setShowError,
    error: undefined,
  };
};
