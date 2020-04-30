import React from 'react';
import { RoutesEnum } from '@enums';
import { Utils } from '@utils';
import { useAuthContext } from '@context/auth/hooks';
import { useParams } from '@reach/router';
import { usePathContext } from '@context/path/hooks';

export const useNavigation = (): void => {
  const { uid, courseId, courseTitle, assessmentTitle } = useAuthContext();
  const { path, setPath } = usePathContext();
  const params = useParams();

  React.useEffect((): void => {
    if (Object.keys(params).length <= 1 && path.size !== 0) {
      setPath(
        (currentPath: Map<string, string>): Map<string, string> => {
          currentPath.clear();
          return currentPath;
        }
      );
    } else if (
      uid &&
      courseTitle &&
      Object.keys(params).length === 2 &&
      path.size !== 2
    ) {
      setPath(
        (currentPath: Map<string, string>): Map<string, string> => {
          currentPath.clear();
          currentPath.set(
            `Courses`,
            Utils.createNavigationPath({ route: RoutesEnum.COURSES, uid })
          );
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
          currentPath.clear();
          currentPath.set(
            `Courses`,
            Utils.createNavigationPath({ route: RoutesEnum.COURSES, uid })
          );
          currentPath.set(
            courseTitle,
            Utils.createNavigationPath({
              route: RoutesEnum.COURSE,
              uid,
              courseId,
            })
          );
          return currentPath.set(assessmentTitle, ``);
        }
      );
    }
  }, [params, path, setPath]);
};
