const range = (start: number, end: number): number[] =>
  [...Array(end - start + 1)].map((_, index) => start + index);

export default range;
