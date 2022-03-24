export class XOChecker {
  
  private lastPlayer;
  private board;
  constructor(lastPlayer, board) {
    this.lastPlayer = lastPlayer;
    this.board = board;
  }

  public horizontal(): boolean {
    for (const row of this.board) {
      const isWin =
        row.filter((p) => p && p.toLowerCase() == this.lastPlayer.toLowerCase())
          .length == this.board.length;
      if (isWin) return true;
    }
    return false;
  }

  public vertical(): boolean {
    for (const column of Array.from(Array(this.board.length).keys())) {
      let countPlayer = 0;
      for (const row of this.board) {
        const p = row[column];
        if (p && p.toLowerCase() == this.lastPlayer.toLowerCase()) countPlayer++;
      }
      if (countPlayer == this.board.length) return true;
    }
    return false;
  }

  public diagonal(): boolean {
    let countLeftToRight = 0;
    let countRightToLeft = 0;
    for (const [index, row] of this.board.entries()) {
      const pL2R = row[index];
      if (pL2R && pL2R.toLowerCase() == this.lastPlayer.toLowerCase())
        countLeftToRight++;
      const pR2L = row[row.length - 1 - index];
      if (pR2L && pR2L.toLowerCase() == this.lastPlayer.toLowerCase())
        countRightToLeft++;
    }
    return countLeftToRight == this.board.length || countRightToLeft == this.board.length;
  }

  public draw(): boolean {
    for (const row of this.board) {
      const emptyPosition = row.filter((p) => !p);
      if (emptyPosition.length > 0) return false;
    }
    return true;
  }
  
}