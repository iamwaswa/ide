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
    console.log(email, password);
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
      const { uid } = message as { uid?: string };
      onLoggedIn(uid);
    }
  } catch (error) {
    onError(error);
  }
};
