export type Callback<T, U> = (args: T) => U;

export type OrNull<T> = T | null;

export type OrUndefined<T> = T | undefined;

export type MappedType<T> = { [key: string]: T };

export type Course = {
  title: string;
};
