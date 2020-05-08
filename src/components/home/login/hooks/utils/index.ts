import { ServerResponse } from '@types';

interface IArgs {
  email: string;
  password: string;
  onLoggedIn: (uid?: string) => void;
  onError: (error: Error) => void;
}

export const loginAsync = async ({
  email,
  password,
  onLoggedIn,
  onError,
}: IArgs): Promise<void> => {
  try {
    const response = await fetch(`/.netlify/functions/login`, {
      method: `POST`,
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { data, error } = (await response.json()) as ServerResponse<string>;
    if (error) {
      throw new Error(error);
    } else {
      onLoggedIn(data);
    }
  } catch (error) {
    onError(error);
  }
};
