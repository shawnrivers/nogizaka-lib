export const toOrdinalNumber = (num: number) => {
  const remainderByTen = num % 10;
  const remainderByHundred = num % 100;
  if (remainderByTen === 1 && remainderByHundred !== 11) {
    return num + "st";
  }
  if (remainderByTen === 2 && remainderByHundred !== 12) {
    return num + "nd";
  }
  if (remainderByTen === 3 && remainderByHundred !== 13) {
    return num + "rd";
  } else {
    return num + "th";
  }
};
