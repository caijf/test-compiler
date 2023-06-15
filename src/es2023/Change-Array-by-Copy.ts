const squence = [1, 2, 3];
// @ts-ignore
squence.toReversed(); // [3, 2, 1]
squence; // [1, 2, 3]

const outOfOrder = new Uint8Array([3, 1, 2]);
// @ts-ignore
outOfOrder.toSorted(); // Uint8Array [1, 2, 3]
outOfOrder; // Uint8Array [3, 1, 2]

const correctionNeeded = [1, 1, 3];
// @ts-ignore
correctionNeeded.with(1, 2); // [1, 2, 3]
correctionNeeded; // [1, 1, 3]
