import { App } from './app';

describe("App Process", () => {
    const expectedPlayerxWinner = `Player x Win`;
    const expectedDraw = `Draw`;
    const expectedNoResult = `No result :(`;
    const app = new App();
    test("x winner (horizontal) should be return correctly", () => {
        const board = [
            ["o", "x", "o"],
            ["x", "o", "o"],
            ["x", "x", "x"],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedPlayerxWinner);
    });
    test("x winner (vertical) should be return correctly", () => {
        const board = [
            ["o", "x", "x"],
            ["x", "o", "x"],
            ["o", "o", "x"],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedPlayerxWinner);
    });
    test("x winner (diagonal) should be return correctly", () => {
        const board = [
            ["o", "o", "x"],
            ["o", "x", "x"],
            ["x", "o", "o"],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedPlayerxWinner);
    });
    test("Result is draw should be return correctly", () => {
        const board = [
            ["o", "x", "o"],
            ["x", "o", "x"],
            ["x", "o", "x"],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedDraw);
    });
    test("No result", () => {
        const board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedNoResult);
    });
    test("don't know result", () => {
        const board = [
            ["x", "x", "o"],
            ["", "o", ""],
            ["", "", ""],
        ];
        const actual = app.process('x', board);
        expect(actual).toEqual(expectedNoResult);
    });
});
