import { Button } from '@material-ui/core';
import React from 'react';
import { useCreateAssessment } from '../hooks';

export const Submit = ({ assessment, reset, submitAssessment }) => {
  const { createAssessmentAsync } = useCreateAssessment();
  React.useEffect(() => {
    if (assessment) {
      createAssessmentAsync(assessment, reset);
    }
  }, [assessment, createAssessmentAsync, reset]);
  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        type="submit"
        onClick={submitAssessment}
      >
        Submit
      </Button>
    </div>
  );
};
