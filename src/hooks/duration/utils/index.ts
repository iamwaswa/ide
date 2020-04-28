export const configureMinutesAndSeconds = (duration: number): string => {
  const minutes = Math.trunc(duration / 60);
  const seconds = duration % 60;

  if (minutes === 0 && seconds === 0) {
    return ``;
  }

  if (seconds === 0) {
    return `${minutes} minute${minutes === 1 ? `` : `s`}`;
  }

  return `${minutes} minute${minutes === 1 ? `` : `s`} ${seconds} second${
    seconds === 1 ? `` : `s`
  }`;
};

export const configureHoursMinutesAndSeconds = (duration: number): string => {
  const hours = Math.trunc(duration / 3600);
  const seconds = duration % 3600;

  if (hours === 0) {
    return configureMinutesAndSeconds(seconds);
  }

  return `${hours} hour${hours === 1 ? `` : `s`}${
    seconds === 0 ? `` : ` ${configureMinutesAndSeconds(seconds)}`
  }`;
};
