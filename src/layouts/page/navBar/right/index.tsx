import { Box, Button } from '@material-ui/core';

import { ErrorToast } from '@components/error';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';
import { useLogout } from './hooks/logout';

export const NavBarRight: React.FC = () => {
  const { uid } = useAuthContext();
  const { logoutAsync, ...error } = useLogout();

  return (
    <>
      <ErrorToast {...error} />
      <Box>{uid && <Button onClick={logoutAsync}>Logout</Button>}</Box>
    </>
  );
};
