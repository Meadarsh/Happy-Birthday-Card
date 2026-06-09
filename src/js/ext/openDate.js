export const isBDay = function () {
  const startTime = new Date(process.env.OPEN_DATE + "T00:00").getTime();
  const localTime = Date.now();
  if (localTime < startTime) return "IS_EARLY";
  return "ON_TIME";
};
