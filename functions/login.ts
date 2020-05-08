import 'firebase/auth';

import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

import Request from 'xmlhttprequest';
import dotenv from 'dotenv';
import firebase from 'firebase/app';

//@ts-ignore
global[`XMLHttpRequest`] = Request.XMLHttpRequest;

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});

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

    const { user } = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    if (!user) {
      throw new Error(`Invalid credentials!`);
    }

    callback(null, {
      headers: {
        [`Content-Type`]: `application/json`,
      },
      statusCode: 200,
      body: JSON.stringify({ data: user.uid }),
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
