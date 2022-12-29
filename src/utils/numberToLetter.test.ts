import { numberToLetter } from './numberToLetter';

describe('Numbers to letter', () => {
  it('should return B for number 1', () => {
    const result = numberToLetter(1);
    const expected = 'B';

    expect(result).toStrictEqual(expected);
  });
});
