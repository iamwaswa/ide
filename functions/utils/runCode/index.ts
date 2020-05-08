import { ITestCase, ITestCaseInput } from './../../interfaces';

import dotenv from 'dotenv';
import { postAsync } from '../postAsync';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

interface IGetScriptArgs {
  assessmentReference?: string;
  courseReference?: string;
}

export const getAssessmentScriptAsync = async ({
  assessmentReference,
  courseReference,
}: IGetScriptArgs): Promise<string> => {
  return `${assessmentReference}${courseReference}`;
};

export const stringifyInputs = (inputs: Array<ITestCaseInput>): string =>
  inputs.reduce(
    (stringInput: string, { value }: ITestCaseInput): string =>
      stringInput.length === 0 ? value : `${stringInput}\n${value}`,
    ``
  );

interface IJDoodleResponse {
  output: string;
  statusCode: number;
  memory?: number;
  cpuTime?: number;
}

interface IRunCodeResponse extends IJDoodleResponse {
  expectedOutput: string;
}

interface IRunTestCaseArgs {
  script: string;
  language?: string;
  versionIndex?: number;
}

export const runTestCaseAsync = ({
  script,
  language,
  versionIndex,
}: IRunTestCaseArgs): ((
  testCase: ITestCase
) => Promise<IRunCodeResponse>) => async ({
  inputs,
  output,
}: ITestCase): Promise<IRunCodeResponse> => {
  const { data, status } = await postAsync<any, IJDoodleResponse>({
    body: {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script,
      language,
      stdin: stringifyInputs(inputs),
      versionIndex: versionIndex?.toString(10),
    },
    url: `https://api.jdoodle.com/v1/execute`,
    timeout: 5000,
  });

  if (status === 401) {
    throw new Error(
      `Something went wrong on our end. Reach out to our admin at olungaw@gmail.com for help. Make sure the subject line is: 401 - JDoodle`
    );
  }

  if (status === 429) {
    throw new Error(
      `Looks like we have hit our cap for the day. We cannot handle any more requests #freeTierAPI`
    );
  }

  return { ...data, expectedOutput: output };
};
