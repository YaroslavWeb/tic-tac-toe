export const initBoard = (modeSize: Boolean) => {
  const [ROWS, COLUMNS] = modeSize ? [9, 9] : [3, 3];
  const ROW_ARR = new Array(ROWS).fill("");
  const COL_ARR = new Array(COLUMNS).fill(0);
  const GRID = ROW_ARR.map(() => COL_ARR.slice());
  return GRID;
};

export const checkWin = (field: any, turn: Number) => {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length - 2; j++) {
      if (
        turn === field[i][j] &&
        turn === field[i][j + 1] &&
        turn === field[i][j + 2]
      )
        return true;
    }
  }
  for (let i = 0; i < field.length - 2; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (
        turn === field[i][j] &&
        turn === field[i + 1][j] &&
        turn === field[i + 2][j]
      )
        return true;
    }
  }
  for (let i = 0; i < field.length - 2; i++) {
    for (let j = 0; j < field[i].length - 2; j++) {
      if (
        turn === field[i][j] &&
        turn === field[i + 1][j + 1] &&
        turn === field[i + 2][j + 2]
      )
        return true;
    }
  }
  for (let i = 0; i < field.length - 2; i++) {
    for (let j = 2; j < field[i].length; j++) {
      if (
        turn === field[i][j] &&
        turn === field[i + 1][j - 1] &&
        turn === field[i + 2][j - 2]
      )
        return true;
    }
  }
  return false;
};
