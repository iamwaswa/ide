import { useAuthContext } from '@context/auth/hooks';
// import { useMutation } from '@apollo/react-hooks';
// import { useParams } from 'react-router-dom';

export const useDeleteAssessment = () => {
  const { courseId, assessmentId } = useAuthContext();

  // const [removeAssessmentAsync] = useMutation(DELETE_ASSESSMENT_MUTATION);
  const removeAssessmentAsync = async (args: any): Promise<void> => {
    return;
  };

  const deleteAssessmentAsync = async (handleClose: () => void) => {
    if (courseId && assessmentId) {
      await removeAssessmentAsync({
        variables: {
          deleteAssessmentInput: {
            courseReference: courseId,
            assessmentReference: assessmentId,
          },
        },
      });
      handleClose();
    }
  };

  return {
    deleteAssessmentAsync,
  };
};
