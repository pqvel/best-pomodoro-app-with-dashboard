export const minToMs = (minutes: number) => {
  return minutes * 60 * 1000;
};

export const msToMin = (ms: number) => {
  return ms / (60 * 1000);
};
