import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '@context/auth/hooks';

interface IProps {
  Component: React.ComponentType<{ path: string }>;
  path: string;
}

export const PrivateRoute: React.FC<IProps> = ({ Component, path }) => {
  const { role, uid } = useAuth();

  if (role === null && !uid) {
    navigate(`/`);
    return null;
  }

  return <Component path={path} />;
};
