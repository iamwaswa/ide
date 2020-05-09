// import { MAKE_STUDENT_SUBMISSION_MUTATION } from '../../../graphql';
import { Editor, OrNull } from '@types';

import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';

// import { useAuthContext } from '@context/auth/hooks';
// import { useDebounce } from '../../../../../../hooks/debounce';
// import { useMutationGraphQL } from '../../../../../../hooks/graphql';
// import { useUpdateMakeSubmissionCache } from '../../update';

interface IArgs {
  editor: OrNull<Editor>;
}

interface IUseSubmission {
  getEditorValue: () => string;
  throttledSendSubmissionAsync: () => void;
  submittedDate: OrNull<string>;
}

export const useSubmission = ({ editor }: IArgs): IUseSubmission => {
  // const { uid, courseId, assessmentId } = useAuthContext();
  const { assessment } = useAssessmentContext();
  // const { setOptions } = useMutationGraphQL(MAKE_STUDENT_SUBMISSION_MUTATION);
  const [submittedDate, setSubmittedDate] = React.useState<OrNull<string>>(
    null
  );

  const getEditorValue = (): string => editor?.getValue() ?? ``;

  // const updateCache = useUpdateMakeSubmissionCache();

  const sendSubmissionAsync = async (): Promise<void> => {
    if (assessment) {
      // setOptions({
      //   variables: {
      //     studentSubmissionInput: {
      //       studentReference: uid,
      //       courseReference: courseId,
      //       assessmentReference: assessmentId,
      //       file: {
      //         name: assessment.file.name,
      //         language: assessment.file.language,
      //         lastModified: new Date(),
      //         data: getEditorValue(),
      //       },
      //     },
      //   },
      //   update: updateCache({ uid, courseId, assessmentId }),
      // });
      setSubmittedDate(new Date().toLocaleTimeString(`en-CA`));
    }
  };

  // const throttledSendSubmissionAsync = useDebounce(sendSubmissionAsync, 2000);
  const throttledSendSubmissionAsync = (): Promise<void> =>
    sendSubmissionAsync();

  return { getEditorValue, throttledSendSubmissionAsync, submittedDate };
};
