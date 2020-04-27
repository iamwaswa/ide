import React from 'react';
import { useAuthContext } from '@context/auth/hooks';
import { useParams } from '@reach/router';
import { usePathContext } from '@context/path/hooks';

export const useNavigation = (): Map<string, string> => {
  const { uid, courseId, courseTitle, assessmentTitle } = useAuthContext();
  const { path, setPath } = usePathContext();
  const params = useParams();

  React.useEffect((): void => {
    if (Object.keys(params).length === 0 && path.size !== 0) {
      setPath(new Map<string, string>());
    } else if (
      uid &&
      courseTitle &&
      Object.keys(params).length === 2 &&
      path.size !== 2
    ) {
      setPath(
        (currentPath: Map<string, string>): Map<string, string> => {
          currentPath.set(`Courses`, `/session/${uid}/courses`);
          return currentPath.set(courseTitle, ``);
        }
      );
    } else if (
      uid &&
      courseId &&
      courseTitle &&
      assessmentTitle &&
      Object.keys(params).length === 3 &&
      path.size !== 3
    ) {
      setPath(
        (currentPath: Map<string, string>): Map<string, string> => {
          currentPath.set(`Courses`, `/session/${uid}/courses`);
          currentPath.set(courseTitle, `/session/${uid}/courses/${courseId}`);
          return currentPath.set(assessmentTitle, ``);
        }
      );
    }
  }, [params, path, setPath]);

  return path;
};
