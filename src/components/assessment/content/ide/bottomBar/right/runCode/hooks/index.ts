import { TestCase } from '@types';
import { useAssessmentContext } from '@components/assessment/context/hooks';
import { useAuthContext } from '@context/auth/hooks';

interface IArgs {
  runCodeAsync: () => void;
  getEditorValue: () => string;
}

interface IUseRunCode {
  handleRunCodeAsync: () => void;
}

export const useRunCode = ({
  runCodeAsync,
  getEditorValue,
}: IArgs): IUseRunCode => {
  const { courseId, assessmentId } = useAuthContext();
  const { assessment } = useAssessmentContext();

  const handleRunCodeAsync = async (): Promise<void> => {
    if (assessment?.submissions?.length) {
      const stdin = {
        title: `Your test cases`,
        testCases: assessment?.submissions?.[0].testCases?.map(
          ({ inputs, output }: TestCase) => ({
            inputs: inputs.map(({ name, value }) => ({ name, value })),
            output,
          })
        ),
      };

      console.log(assessmentId, courseId, getEditorValue, runCodeAsync, stdin);

      // await runCodeAsync({
      //   variables: {
      //     compileCodeInput: {
      //       courseReference: courseId,
      //       assessmentReference: assessmentId,
      //       hasScript: assessment.script !== null,
      //       language: assessment.file.language,
      //       script:
      //         assessment.script === null
      //           ? getEditorValue()
      //           : `${getEditorValue()}\n\n${assessment.script}`,
      //       stdin,
      //     },
      //   },
      // });
    }
  };

  return { handleRunCodeAsync };
};
