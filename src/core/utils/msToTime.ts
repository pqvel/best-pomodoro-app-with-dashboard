export const msToTime = (ms: number) => {
  const seconds: number = Math.floor(ms / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);

  return {
    seconds: `${seconds % 60}`.padStart(2, "0"),
    minutes: `${minutes % 60}`.padStart(2, "0"),
    hours: `${hours % 24}`.padStart(2, "0"),
    days: `${days}`.padStart(2, "0"),
  };
};
