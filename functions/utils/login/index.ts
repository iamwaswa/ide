import firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});

interface ISignInArgs {
  email: string;
  password: string;
}

export const signInAsync = async ({
  email,
  password,
}: ISignInArgs): Promise<firebase.User | null> => {
  const { user } = await app.auth().signInWithEmailAndPassword(email, password);
  return user;
};
