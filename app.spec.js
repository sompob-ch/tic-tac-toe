const App = require("./app");

describe("Tic Tac Toe", () => {
  describe("check horizontal", () => {
    test("1st row", () => {
      const board = [["x", "x", "x"], [], []];
      const actual = App.horizontal("x", board);
      expect(actual).toEqual(true);
    });
    test("2nd row", () => {
      const board = [[], ["x", "x", "x"], []];
      const actual = App.horizontal("x", board);
      expect(actual).toEqual(true);
    });
    test("3rd row", () => {
      const board = [[], [], ["x", "x", "x"]];
      const actual = App.horizontal("x", board);
      expect(actual).toEqual(true);
    });
  });
  describe("check vertical", () => {
    test("1st column", () => {
      const board = [
        ["x", "", ""],
        ["x", "", ""],
        ["x", "", ""],
      ];
      const actual = App.vertical("x", board);
      expect(actual).toEqual(true);
    });
    test("2nd column", () => {
      const board = [
        ["", "x", ""],
        ["", "x", ""],
        ["", "x", ""],
      ];
      const actual = App.vertical("x", board);
      expect(actual).toEqual(true);
    });
    test("3rd column", () => {
      const board = [
        ["", "", "x"],
        ["", "", "x"],
        ["", "", "x"],
      ];
      const actual = App.vertical("x", board);
      expect(actual).toEqual(true);
    });
  });
  describe("check diagonal", () => {
    test("left to right", () => {
      const board = [
        ["x", "", ""],
        ["", "x", ""],
        ["", "", "x"],
      ];
      const actual = App.diagonal("x", board);
      expect(actual).toEqual(true);
    });
    test("right to left", () => {
      const board = [
        ["", "", "x"],
        ["", "x", ""],
        ["x", "", ""],
      ];
      const actual = App.diagonal("x", board);
      expect(actual).toEqual(true);
    });
  });
  describe("run core process", () => {
    const expectedXWin = `Player x Win`;
    const expectedOWin = `Player o Win`;
    test("x win horizontal", () => {
      const board = [["x", "x", "x"], [], []];
      const actual = App.run("x", board);
      expect(actual).toEqual(expectedXWin);
    });
    test("x win vertical", () => {
      const board = [
        ["", "", "x"],
        ["", "", "x"],
        ["", "", "x"],
      ];
      const actual = App.run("x", board);
      expect(actual).toEqual(expectedXWin);
    });
    test("x win diagonal", () => {
      const board = [
        ["", "", "x"],
        ["", "x", ""],
        ["x", "", ""],
      ];
      const actual = App.run("x", board);
      expect(actual).toEqual(expectedXWin);
    });
    test("o win horizontal", () => {
      const board = [[], [], ["o", "o", "o"]];
      const actual = App.run("o", board);
      expect(actual).toEqual(expectedOWin);
    });
    test("o win vertical", () => {
      const board = [
        ["", "o", ""],
        ["", "o", ""],
        ["", "o", ""],
      ];
      const actual = App.run("o", board);
      expect(actual).toEqual(expectedOWin);
    });
    test("o win diagonal", () => {
      const board = [
        ["o", "", ""],
        ["", "o", ""],
        ["", "", "o"],
      ];
      const actual = App.run("o", board);
      expect(actual).toEqual(expectedOWin);
    });
  });
});
