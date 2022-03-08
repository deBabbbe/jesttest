const { sum } = require("./Custom");
const each = require("jest-each").default;

describe("sum", () => {
  each([
    [1, 2, 3],
    [2, 2, 4],
  ]).test("returns the result of adding %d to %d'", (a, b, res) => {
    expect(sum(a, b)).toBe(res);
  });
});
