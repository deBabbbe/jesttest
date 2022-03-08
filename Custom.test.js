const { sum, tree } = require("./Custom");
const each = require("jest-each").default;

describe("sum", () => {
  each([
    [1, 2, 3],
    [2, 2, 4],
  ]).test("returns the result of adding %d to %d'", (a, b, res) => {
    expect(sum(a, b)).toBe(res);
  });
});

describe("Tree", () => {
  it("1 line", () => {
    const expected = "*";
    expect(tree("*", 1)).toEqual(expected);
  });

  it("2 lines", () => {
    const expected = " * \n" + "***";
    expect(tree("*", 2)).toEqual(expected);
  });

  it("3 lines", () => {
    const expected = "  *  \n" + " *** \n" + "*****";
    expect(tree("*", 3)).toEqual(expected);
  });

  it("4 lines", () => {
    const expected = "   *   \n" + "  ***  \n" + " ***** \n" + "*******";
    expect(tree("*", 4)).toEqual(expected);
  });
});
