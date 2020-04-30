import { Callback, OrNull, OrUndefined } from '@types';
import { DurationUnitEnum, RoutesEnum } from '@enums';

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

const createNavigationPath = (params: CreateNavigationPathArgs): string => {
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

const readSingleFileAsText = <T extends OrNull<string | ArrayBuffer>>(
  fileList: OrNull<FileList>,
  callback: Callback<T, void>
): void => {
  if (!fileList || fileList.length !== 1) {
    return;
  }

  const fileReader = new FileReader();

  fileReader.onload = (): void => callback(fileReader.result as T);

  fileReader.readAsText(fileList[0]);
};

const calculateDurationInSeconds = (
  duration?: number,
  durationUnit?: DurationUnitEnum
): OrUndefined<number> => {
  if (!duration || !durationUnit) {
    return;
  }

  switch (durationUnit) {
    case DurationUnitEnum.HOURS: {
      return duration * 60 * 60;
    }
    case DurationUnitEnum.MINUTES: {
      return duration * 60;
    }
    case DurationUnitEnum.SECONDS: {
      return duration;
    }
    default:
      throw new Error(`Unknown duration unit: ${durationUnit}`);
  }
};

export const Utils = {
  calculateDurationInSeconds,
  createNavigationPath,
  readSingleFileAsText,
};
