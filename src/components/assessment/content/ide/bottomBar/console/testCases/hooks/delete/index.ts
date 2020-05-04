// import { DELETE_STUDENT_TEST_CASE_SUBMISSION_MUTATION } from '../graphql';
import { UseUpdateTestCase } from '@types';
// import { useAuthContext } from '@context/auth/hooks';
// import { useMutationGraphQL } from '../../../../../../../../../hooks/graphql';
// import { useUpdateCacheAfterDelete } from './updateCache';

export const useDeleteTestCase = (): UseUpdateTestCase => {
  // const { uid, courseId, assessmentId } = useAuthContext();
  // const { setOptions, loading, error } = useMutationGraphQL(
  //   DELETE_STUDENT_TEST_CASE_SUBMISSION_MUTATION
  // );
  // const { deleteTestCaseToCache } = useUpdateCacheAfterDelete();

  const deleteTestCaseAsync = async (): Promise<void> => {
    // setOptions({
    //   variables: {
    //     studentTestCaseSubmissionInput: {
    //       courseReference: courseId,
    //       assessmentReference: assessmentId,
    //       studentReference: uid,
    //       testCaseReference: id,
    //     },
    //   },
    //   update: deleteTestCaseToCache,
    // });
  };

  return [
    /*loading*/ false,
    /*error ? error.message :*/ undefined,
    deleteTestCaseAsync,
  ];
};
