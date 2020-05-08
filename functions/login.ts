import 'firebase/auth';

import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

import Request from 'xmlhttprequest';
import { headers } from './utils/headers';
import { signInAsync } from './utils/login';

//@ts-ignore
global[`XMLHttpRequest`] = Request.XMLHttpRequest;

interface IBody {
  email?: string;
  password?: string;
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

    const { email, password } = JSON.parse(event.body ?? `{}`) as IBody;

    if (!email) {
      throw new Error(`Email missing!`);
    }

    if (!password) {
      throw new Error(`Password missing!`);
    }

    const user = await signInAsync({ email, password });

    if (!user) {
      throw new Error(`Invalid credentials!`);
    }

    callback(null, {
      headers,
      statusCode: 200,
      body: JSON.stringify({ data: user.uid }),
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
