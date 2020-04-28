import { RoleEnum, RoutesEnum } from '@enums';

import { OrNull } from '@types';
import React from 'react';
import { createNavigationPath } from '@utils';
import { navigate } from 'gatsby';

export interface IUseAuthContext {
  role: OrNull<RoleEnum>;
  uid: OrNull<string>;
  courseId: OrNull<string>;
  courseTitle: OrNull<string>;
  assessmentId: OrNull<string>;
  assessmentTitle: OrNull<string>;
  setRole: React.Dispatch<React.SetStateAction<OrNull<RoleEnum>>>;
  setUid: React.Dispatch<React.SetStateAction<OrNull<string>>>;
  setCourseId: React.Dispatch<React.SetStateAction<OrNull<string>>>;
  setCourseTitle: React.Dispatch<React.SetStateAction<OrNull<string>>>;
  setAssessmentId: React.Dispatch<React.SetStateAction<OrNull<string>>>;
  setAssessmentTitle: React.Dispatch<React.SetStateAction<OrNull<string>>>;
}

export const AuthContext = React.createContext<Partial<IUseAuthContext>>({});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [role, setRole] = React.useState<OrNull<RoleEnum>>(null);
  const [uid, setUid] = React.useState<OrNull<string>>(null);
  const [courseId, setCourseId] = React.useState<OrNull<string>>(null);
  const [courseTitle, setCourseTitle] = React.useState<OrNull<string>>(null);
  const [assessmentId, setAssessmentId] = React.useState<OrNull<string>>(null);
  const [assessmentTitle, setAssessmentTitle] = React.useState<OrNull<string>>(
    null
  );

  React.useEffect((): void => {
    if (role !== null && uid) {
      navigate(createNavigationPath({ route: RoutesEnum.COURSES, uid }));
      return;
    } else {
      navigate(`/`);
      return;
    }
  }, [role, uid]);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        uid,
        setUid,
        courseId,
        setCourseId,
        courseTitle,
        setCourseTitle,
        assessmentId,
        setAssessmentId,
        assessmentTitle,
        setAssessmentTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
