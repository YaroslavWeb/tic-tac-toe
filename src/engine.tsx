export const initBoard = (modeSize: Boolean) => {
  const [ROWS, COLUMNS] = modeSize ? [9, 9] : [3, 3];
  const ROW_ARR = new Array(ROWS).fill("");
  const COL_ARR = new Array(COLUMNS).fill(0);
  const GRID = ROW_ARR.map(() => COL_ARR.slice());
  return GRID;
};

export const checkWin = (field: any, posX: number, posY: number, turn: number, vector: number) => {
  // const checkSize = Math.floor(field.length / vector)
  // for (let index = 0; index < field.length; index++) {
  //   for (let jndex = 0; jndex < field.length; jndex++) {
  //   }
  // }
  
  // Vertical
  if(checkVertical(0, 0, field, turn, vector)) return true
  if(checkVertical(0, 1, field, turn, vector)) return true
  if(checkVertical(0, 2, field, turn, vector)) return true

  // Horizontal
  if(checkHorizontal(0, 0, field, turn, vector)) return true
  if(checkHorizontal(1, 0, field, turn, vector)) return true
  if(checkHorizontal(2, 0, field, turn, vector)) return true

  // DiagonalLeft
  if(checkDiagonalLeft(0, 0, field, turn, vector)) return true

  // DiagonalRight
  if(checkDiagonalRight(2, 2, field, turn, vector)) return true
  
};

const checkVertical = (i:number, j:number, field: any, turn: number, vector: number) => {
  for (let index = 0; index < vector; index++) {
    if(field[index][j] === turn) continue
    return false
  }
  return true
}
const checkHorizontal = (i:number, j:number, field: any, turn: number, vector: number) => {
  for (let index = 0; index < vector; index++) {
    if(field[i][index] === turn) continue
    return false
  }
  return true
}

const checkDiagonalLeft = (i:number, j:number, field: any, turn: number, vector: number) => {
  for (let index = 0; index < vector; index++) {
    if(field[index][index] === turn) continue
    return false
  }
  return true
}

const checkDiagonalRight = (i:number, j:number, field: any, turn: number, vector: number) => {
  for (let index = 2, counter = 0; counter < vector; counter++, index--) {
    if(field[index][index] === turn) continue
    return false
  }
  return true
}

// export const checkWin = (field: any, turn: Number) => {
//   for (let i = 0; i < field.length; i++) {
//     for (let j = 0; j < field[i].length - 2; j++) {
//       if (
//         turn === field[i][j] &&
//         turn === field[i][j + 1] &&
//         turn === field[i][j + 2]
//       )
//         return true;
//     }
//   }
//   for (let i = 0; i < field.length - 2; i++) {
//     for (let j = 0; j < field[i].length; j++) {
//       if (
//         turn === field[i][j] &&
//         turn === field[i + 1][j] &&
//         turn === field[i + 2][j]
//       )
//         return true;
//     }
//   }
//   for (let i = 0; i < field.length - 2; i++) {
//     for (let j = 0; j < field[i].length - 2; j++) {
//       if (
//         turn === field[i][j] &&
//         turn === field[i + 1][j + 1] &&
//         turn === field[i + 2][j + 2]
//       )
//         return true;
//     }
//   }
//   for (let i = 0; i < field.length - 2; i++) {
//     for (let j = 2; j < field[i].length; j++) {
//       if (
//         turn === field[i][j] &&
//         turn === field[i + 1][j - 1] &&
//         turn === field[i + 2][j - 2]
//       )
//         return true;
//     }
//   }
//   return false;
// };
