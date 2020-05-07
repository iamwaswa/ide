import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
  _: APIGatewayEvent,
  __: Context,
  callback: Callback
): Promise<void> => {
  callback(null, {
    headers: {
      [`Content-Type`]: `application/json`,
    },
    statusCode: 200,
    body: JSON.stringify(`Hello world!`),
  });
};
