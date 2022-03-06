const horizontal = (player, board) => {
  for (const row of board) {
    const isWin =
      row.filter((p) => p && p.toLowerCase() == player.toLowerCase()).length ==
      board.length;
    if (isWin) return true;
  }
  return false;
};

const vertical = (player, board) => {
  for (const column of Array.from(Array(board.length).keys())) {
    let countPlayer = 0;
    for (const row of board) {
      const p = row[column];
      if (p && p.toLowerCase() == player.toLowerCase()) countPlayer++;
    }
    if (countPlayer == board.length) return true;
  }
  return false;
};

const diagonal = (player, board) => {
  let countLeftToRight = 0;
  let countRightToLeft = 0;
  for (const [index, row] of board.entries()) {
    const pL2R = row[index];
    if (pL2R && pL2R.toLowerCase() == player.toLowerCase()) countLeftToRight++;
    const pR2L = row[row.length - 1 - index];
    if (pR2L && pR2L.toLowerCase() == player.toLowerCase()) countRightToLeft++;
  }
  return countLeftToRight == board.length || countRightToLeft == board.length;
};

const run = (player, board) => {
    const isHorizontalWin = horizontal(player, board);
    if (isHorizontalWin) return `Player ${player} Win`;
    const isVerticalWin = vertical(player, board);
    if (isVerticalWin) return `Player ${player} Win`;
    const isDiagonalWin = diagonal(player, board);
    if (isDiagonalWin) return `Player ${player} Win`;
}

module.exports = {
  horizontal,
  vertical,
  diagonal,
  run,
};
