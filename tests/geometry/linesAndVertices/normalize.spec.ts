import { normalize } from '../../../src/index';

describe('normalize', () => {
  it('Normalized point should match expected', () => {
    const result = normalize({
      x: 1,
      y: 2,
    });
    expect(result.x).toBeCloseTo(0.45);
    expect(result.y).toBeCloseTo(0.89);
  });
});
