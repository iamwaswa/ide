import { RoutesEnum } from '@enums';

type CreateNavigationPathArgs =
  | {
      route: RoutesEnum.COURSES;
      uid: string;
      courseId?: string;
      assessmentId?: string;
    }
  | {
      route: RoutesEnum.COURSE;
      uid: string;
      courseId: string;
      assessmentId?: string;
    }
  | {
      route: RoutesEnum.ASSESSMENT;
      uid: string;
      courseId: string;
      assessmentId: string;
    };

export const createNavigationPath = (
  params: CreateNavigationPathArgs
): string => {
  switch (params.route) {
    case RoutesEnum.COURSES: {
      return params.route.replace(/:uid/, params.uid);
    }
    case RoutesEnum.COURSE: {
      return params.route
        .replace(/:uid/, params.uid)
        .replace(/:courseId/, params.courseId);
    }
    case RoutesEnum.ASSESSMENT: {
      return params.route
        .replace(/:uid/, params.uid)
        .replace(/:courseId/, params.courseId)
        .replace(/:assessmentId/, params.assessmentId);
    }
    default:
      throw new Error(`Unknown route: ${params}`);
  }
};
