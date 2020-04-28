import React from 'react';
import { RoutesEnum } from '@enums';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';

interface IRouteProps {
  path: RoutesEnum;
}

interface IProps {
  Component: React.ComponentType<IRouteProps>;
  path: RoutesEnum;
}

export const PrivateRoute: React.FC<IProps> = ({ Component, ...props }) => {
  const { role, uid } = useAuthContext();

  if (role === null && !uid) {
    navigate(`/`);
    return null;
  }

  return <Component {...props} />;
};
