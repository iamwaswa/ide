import {
  configureHoursMinutesAndSeconds,
  configureMinutesAndSeconds,
} from './utils';

import React from 'react';

interface IArgs {
  durationInSeconds?: number;
}

export const useDuration = ({ durationInSeconds }: IArgs): string => {
  return React.useMemo(() => {
    if (!durationInSeconds) {
      return ``;
    }

    if (durationInSeconds === 0) {
      return `Time up!`;
    }

    if (durationInSeconds <= 59) {
      return `${durationInSeconds} second${durationInSeconds !== 1 ? `s` : ``}`;
    }

    if (durationInSeconds <= 3599) {
      return configureMinutesAndSeconds(durationInSeconds);
    }

    return configureHoursMinutesAndSeconds(durationInSeconds);
  }, [durationInSeconds]);
};
