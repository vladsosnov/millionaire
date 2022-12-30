export const numberToLetter = (num: number) => {
  switch (num) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
    default:
      throw new Error('Something went wrong, please check your input!');
  }
};
