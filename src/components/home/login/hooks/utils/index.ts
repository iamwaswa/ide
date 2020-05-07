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

    const { message } = await response.json();
    if (response.status.toString().startsWith(`4`)) {
      throw new Error(message);
    } else {
      const { user } = message as firebase.auth.UserCredential;
      onLoggedIn(user?.uid);
    }
  } catch (error) {
    onError(error);
  }
};
