import { perpendicular } from '../../../src/index';

describe('perpendicular', () => {
  it('Perpendicular line should match expected', () => {
    const result = perpendicular(
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 4,
      },
    );

    expect(result.x).toBeCloseTo(-0.83);
    expect(result.y).toBeCloseTo(0.55);
  });
});
