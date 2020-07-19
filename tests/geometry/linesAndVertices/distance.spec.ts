import { distance } from '../../../src/index';

describe('squaredDistance', () => {
  it('Diagnol line matches expected', () => {
    const result = distance(
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 3,
      },
    );
    expect(result).toBeCloseTo(2.83);
  });
});
