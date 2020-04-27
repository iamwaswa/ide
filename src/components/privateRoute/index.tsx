import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

interface IRouteProps {
  path: string;
}

interface IProps {
  Component: React.ComponentType<IRouteProps>;
  path: string;
}

export const PrivateRoute: React.FC<IProps> = ({ Component, ...props }) => {
  const { role, uid } = useAuthContext();

  if (role === null && !uid) {
    navigate(`/`);
    return null;
  }

  return <Component {...props} />;
};
