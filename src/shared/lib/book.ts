export const getFirstIsbnSegment = (isbn?: string) =>
  isbn ? isbn.split(' ').filter((item) => item)[0] : '';
