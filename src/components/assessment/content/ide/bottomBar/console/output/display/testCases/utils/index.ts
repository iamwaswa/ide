export const transformCPUTime = (cpuTime: number): string => {
  if (cpuTime < 1) {
    return `${cpuTime * 1000} milliseconds`;
  }

  if (cpuTime < 60) {
    return `${cpuTime} seconds`;
  }

  if (cpuTime < 3600) {
    return `${Math.round(cpuTime / 60)} minutes`;
  }

  return `More than an hour`;
};
