import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { getAssessmentScriptAsync, runTestCaseAsync } from './utils/runCode';

import { ITestCase } from './interfaces';
import { headers } from './utils/headers';

interface IBody {
  assessmentReference?: string;
  courseReference?: string;
  language?: string;
  testCases?: Array<ITestCase>;
  versionIndex?: number;
}

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
      runTestCaseAsync({ language, script, versionIndex })
    );

    const data = await Promise.all(promises ?? []);

    callback(null, {
      headers,
      statusCode: 200,
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    console.error(error);
    callback(null, {
      headers,
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    });
  }
};
