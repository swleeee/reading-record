export const formatNumber = (num: number, precision = 2) => {
  const NUMBER_UNIT_SUFFIXES = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const matchedNumberFormat = NUMBER_UNIT_SUFFIXES.find(
    (x) => Math.abs(num) >= x.threshold,
  );

  if (!matchedNumberFormat || !matchedNumberFormat.suffix) return num;

  return (
    (num / matchedNumberFormat.threshold).toFixed(precision) +
    matchedNumberFormat.suffix
  );
};
