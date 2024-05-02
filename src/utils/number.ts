export const formatNumber = (num: number, precision = 2) => {
  const NUMBER_FORMAT_THRESHOLDS = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = NUMBER_FORMAT_THRESHOLDS.find(
    (x) => Math.abs(num) >= x.threshold,
  );
  if (!found) return num;

  return (num / found.threshold).toFixed(precision) + found.suffix;
};
