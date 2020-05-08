import fetch from 'node-fetch';

interface IPostArgs<T = any> {
  body: T;
  url: string;
  timeout?: number;
}

interface IPostResponse<T = any> {
  status: number;
  data: T;
}

export const postAsync = async <T, U>({
  body,
  url,
  timeout,
}: IPostArgs<T>): Promise<IPostResponse<U>> => {
  const response = await fetch(url, {
    headers: {
      [`Content-Type`]: `application/json`,
    },
    method: `POST`,
    body: JSON.stringify(body),
    timeout,
  });
  return { status: response.status, data: await response.json() };
};
