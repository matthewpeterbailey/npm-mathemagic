import { Point } from '../../../src/core/point';
import { squaredDistance } from '../../../src/index';

describe('squaredDistance', () => {
  it('Diagnol line matches expected', () => {
    const result = squaredDistance(
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 3,
      },
    );
    expect(result).toBeCloseTo(8);
  });
});
