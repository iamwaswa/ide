// import { MAKE_STUDENT_TEST_CASE_SUBMISSION_MUTATION } from '../graphql';
import { UseUpdateTestCase } from '@types';
// import { useAuthContext } from '@context/auth/hooks';
// import { useMutationGraphQL } from '../../../../../../../../../hooks/graphql';
// import { useUpdateCacheAfterAdd } from './updateCache';

export const useAddTestCase = (): UseUpdateTestCase => {
  // const { uid, courseId, assessmentId } = useAuthContext();
  // const { setOptions, loading, error } = useMutationGraphQL(
  //   MAKE_STUDENT_TEST_CASE_SUBMISSION_MUTATION
  // );
  // const { addTestCaseToCache } = useUpdateCacheAfterAdd();

  const addTestCaseAsync = async (): Promise<void> => {
    // setOptions({
    //   variables: {
    //     studentTestCaseSubmissionInput: {
    //       courseReference: courseId,
    //       assessmentReference: assessmentId,
    //       studentReference: uid,
    //       inputs,
    //       output,
    //     },
    //   },
    //   update: addTestCaseToCache,
    // });
  };

  return [
    /*loading*/ false,
    /*error ? error.message :*/ undefined,
    addTestCaseAsync,
  ];
};
