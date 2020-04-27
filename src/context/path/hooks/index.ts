import * as React from 'react';

import { IUsePathContext, PathContext } from '../';

export const usePathContext = (): IUsePathContext => {
  const { path, setPath } = React.useContext(PathContext);

  if (path === undefined || setPath === undefined) {
    throw Error(`PathContext is undefined`);
  }

  return {
    path,
    setPath,
  };
};
