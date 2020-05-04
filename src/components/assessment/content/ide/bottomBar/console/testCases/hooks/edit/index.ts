// import { MAKE_STUDENT_TEST_CASE_SUBMISSION_MUTATION } from '../graphql';
import { UseUpdateTestCase } from '@types';
// import { useAuthContext } from '@context/auth/hooks';
// import { useMutationGraphQL } from '../../../../../../../../../hooks/graphql';
// import { useUpdateCacheAfterEdit } from './updateCache';

export const useEditTestCase = (): UseUpdateTestCase => {
  // const { uid, courseId, assessmentId } = useAuthContext();
  // const { setOptions, loading, error } = useMutationGraphQL(
  //   MAKE_STUDENT_TEST_CASE_SUBMISSION_MUTATION
  // );
  // const { editTestCaseToCache } = useUpdateCacheAfterEdit();

  const editTestCaseAsync = async () => {
    // setOptions({
    //   variables: {
    //     studentTestCaseSubmissionInput: {
    //       courseReference: courseId,
    //       assessmentReference: assessmentId,
    //       studentReference: uid,
    //       testCaseReference: id,
    //       inputs: inputs.map(({ name, value }) => ({ name, value })),
    //       output,
    //     },
    //   },
    //   update: editTestCaseInCache,
    // });
  };

  return [
    /*loading*/ false,
    /*error ? error.message :*/ undefined,
    editTestCaseAsync,
  ];
};
