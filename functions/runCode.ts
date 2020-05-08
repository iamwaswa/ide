import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { ITestCase, ITestCaseInput } from './interfaces';

import dotenv from 'dotenv';
import fetch from 'node-fetch';

//@ts-ignore
global[`XMLHttpRequest`] = Request.XMLHttpRequest;

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

interface IBody {
  assessmentReference?: string;
  courseReference?: string;
  language?: string;
  testCases?: Array<ITestCase>;
  versionIndex?: number;
}

interface IJDoodleResponse {
  output: string;
  statusCode: number;
  memory?: number;
  cpuTime?: number;
}

interface IRunCodeResponse extends IJDoodleResponse {
  expectedOutput: string;
}

interface IArgs {
  assessmentReference?: string;
  courseReference?: string;
}

const getAssessmentScriptAsync = async ({
  assessmentReference,
  courseReference,
}: IArgs): Promise<string> => {
  return `${assessmentReference}${courseReference}`;
};

const stringifyInputs = (inputs: Array<ITestCaseInput>): string =>
  inputs.reduce(
    (stringInput: string, { value }: ITestCaseInput): string =>
      stringInput.length === 0 ? value : `${stringInput}\n${value}`,
    ``
  );

export const handler: Handler = async (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback
): Promise<void> => {
  try {
    if (event.httpMethod !== `POST`) {
      throw new Error(`Invalid request`);
    }

    const {
      assessmentReference,
      courseReference,
      language,
      testCases,
      versionIndex,
    } = JSON.parse(event.body ?? `{}`) as IBody;

    const script = await getAssessmentScriptAsync({
      assessmentReference,
      courseReference,
    });

    const promises = testCases?.map(
      async ({ inputs, output }: ITestCase): Promise<IRunCodeResponse> => {
        const response = await fetch(`https://api.jdoodle.com/v1/execute`, {
          headers: {
            [`Content-Type`]: `application/json`,
          },
          method: `POST`,
          body: JSON.stringify({
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET,
            script,
            language,
            stdin: stringifyInputs(inputs),
            versionIndex: versionIndex?.toString(10),
          }),
          timeout: 5000,
        });

        if (response.status === 401) {
          throw new Error(
            `Something went wrong on our end. Reach out to our admin at olungaw@gmail.com for help. Make sure the subject line is: 401 - JDoodle`
          );
        }

        if (response.status === 429) {
          throw new Error(
            `Looks like we have hit our cap for the day. We cannot handle any more requests #freeTierAPI`
          );
        }

        const data = (await response.json()) as IJDoodleResponse;

        return { ...data, expectedOutput: output };
      }
    );

    const data = await Promise.all(promises ?? []);

    callback(null, {
      headers: {
        [`Content-Type`]: `application/json`,
      },
      statusCode: 200,
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    console.error(error);
    callback(null, {
      headers: {
        [`Content-Type`]: `application/json`,
      },
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    });
  }
};
