/**
 * Returns the cross product of two vectors as an array
 * @param vectA Vector A as array
 * @param vectB Vector B as array
 */

export const cross = (vectA: number[], vectB: number[]): number[] => {
    if (vectA.length !== 3 || vectB.length !== 3) {
      throw new Error('cross() requires two array of numbers with three elements');
    }

    const crossProduct: number[] = [
        vectA[1]*vectB[2]-vectA[2]*vectB[1],
        vectA[2]*vectB[0]-vectA[0]*vectB[2],
        vectA[0]*vectB[1]-vectA[1]*vectB[0]
    ];

    return crossProduct;

  };
  