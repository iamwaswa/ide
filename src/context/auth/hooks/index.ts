import * as React from 'react';

import { Auth, IUseAuth } from '../';

export const useAuth = (): IUseAuth => {
  const { role, setRole, uid, setUid } = React.useContext(Auth);

  if (
    role === undefined ||
    setRole === undefined ||
    uid === undefined ||
    setUid === undefined
  ) {
    throw Error(`Auth is undefined`);
  }

  return {
    role,
    setRole,
    uid,
    setUid,
  };
};
