import { XOChecker } from './xo-checker';

const dummyPlayer = "P";
describe("check winner with horizontal", () => {
  test("board win 1st row should be return true", () => {
    const board = [
      [dummyPlayer, dummyPlayer, dummyPlayer],
      ["", "", ""],
      ["", "", ""]
    ];
    const actual = new XOChecker(dummyPlayer, board).horizontal();
    expect(actual).toEqual(true);
  });
  test("board win 2nd row should be return true", () => {
    const board = [
      ["", "", ""],
      [dummyPlayer, dummyPlayer, dummyPlayer],
      ["", "", ""]
    ];
    const actual = new XOChecker(dummyPlayer, board).horizontal();
    expect(actual).toEqual(true);
  });
  test("board win 3rd row should be return true", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      [dummyPlayer, dummyPlayer, dummyPlayer]
    ];
    const actual = new XOChecker(dummyPlayer, board).horizontal();
    expect(actual).toEqual(true);
  });
});

describe("check winner with vertical", () => {
  test("board win 1st column should be return true", () => {
    const board = [
      [dummyPlayer, "", ""],
      [dummyPlayer, "", ""],
      [dummyPlayer, "", ""],
    ];
    const actual = new XOChecker(dummyPlayer, board).vertical();
    expect(actual).toEqual(true);
  });
  test("board win 2nd column should be return true", () => {
    const board = [
      ["", dummyPlayer, ""],
      ["", dummyPlayer, ""],
      ["", dummyPlayer, ""],
    ];
    const actual = new XOChecker(dummyPlayer, board).vertical();
    expect(actual).toEqual(true);
  });
  test("board win 3rd column  should be return true", () => {
    const board = [
      ["", "", dummyPlayer],
      ["", "", dummyPlayer],
      ["", "", dummyPlayer],
    ];
    const actual = new XOChecker(dummyPlayer, board).vertical();
    expect(actual).toEqual(true);
  });
});

describe("check winner with diagonal", () => {
  test("board win diagonal left to right should be return true", () => {
    const board = [
      [dummyPlayer, "", ""],
      ["", dummyPlayer, ""],
      ["", "", dummyPlayer],
    ];
    const actual = new XOChecker(dummyPlayer, board).diagonal();
    expect(actual).toEqual(true);
  });
  test("board win diagonal right to left should be return true", () => {
    const board = [
      ["", "", dummyPlayer],
      ["", dummyPlayer, ""],
      [dummyPlayer, "", ""],
    ];
    const actual = new XOChecker(dummyPlayer, board).diagonal();
    expect(actual).toEqual(true);
  });
});

describe("check result draw", () => {
  test("board is draw should be return true", () => {
    const board = [
      ["o", "o", "x"],
      ["x", "x", "o"],
      ["o", "x", "o"],
    ];
    const actual = new XOChecker(dummyPlayer, board).draw();
    expect(actual).toEqual(true);
  });
});