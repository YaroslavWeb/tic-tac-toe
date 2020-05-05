export const initField = (modeSize: boolean) => {
  const field: any[] = [];
  const [rows, cols] = modeSize ? [9, 9] : [3, 3];
  for (let i = 0; i < rows; i++) {
    field[i] = [];
    for (let j = 0; j < cols; j++) {
      field[i][j] = 0;
    }
  }
  return field;
};
