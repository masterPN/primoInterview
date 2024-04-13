import { merge } from ".";

describe("merge function", () => {
  it("merge array with sort", () => {
    const collection_1 = [1, 3];
    const collection_2 = [8, 6, 4];
    const collection_3 = [2, 9, 10];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 6, 8, 9, 10]);
  });
});
