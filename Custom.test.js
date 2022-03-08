const { sum } = require("./Custom");

describe("sum", () => {
  it("sum of two values", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
