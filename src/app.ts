import { XOChecker } from "xo-checker";

export class App {

    constructor() {}

    public process(lastPlayer: string, board: string[][]): string {
        const messageWinner = `Player ${lastPlayer} Win`;
        const xoChecker = new XOChecker(lastPlayer, board);
        if (xoChecker.horizontal()) return messageWinner;
        if (xoChecker.vertical()) return messageWinner;
        if (xoChecker.diagonal()) return messageWinner;
        if (xoChecker.draw()) return `Draw`;
        return `No result :(`;
    }

}