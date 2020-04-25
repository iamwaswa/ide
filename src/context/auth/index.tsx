import { OrNull } from '@types';
import React from 'react';
import { RoleEnum } from '@enums';
import { navigate } from 'gatsby';

export interface IUseAuth {
  role: OrNull<RoleEnum>;
  uid: OrNull<string>;
  setRole: React.Dispatch<React.SetStateAction<OrNull<RoleEnum>>>;
  setUid: React.Dispatch<React.SetStateAction<OrNull<string>>>;
}

export const Auth = React.createContext<Partial<IUseAuth>>({});

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [role, setRole] = React.useState<OrNull<RoleEnum>>(null);
  const [uid, setUid] = React.useState<OrNull<string>>(null);

  React.useEffect((): void => {
    if (role !== null && uid) {
      navigate(`/private/courses`);
      return;
    } else {
      navigate(`/`);
      return;
    }
  }, [role, uid]);

  return (
    <Auth.Provider value={{ role, setRole, uid, setUid }}>
      {children}
    </Auth.Provider>
  );
};
