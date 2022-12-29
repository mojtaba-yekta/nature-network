const totalRow = 4;
const totalCol = 4;

const network = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const nature = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const movingPattern = [
  [
    [1, 0],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 0],
    [-1, -1],
    [0, -1],
  ],
  [
    [-1, 0],
    [-1, -1],
    [0, -1],
  ],
  [
    [-1, 0],
    [-1, 1],
    [0, 1],
  ],
];

const inputOneRound = () => {
  natureInput(0, 0, 0);
  natureInput(1, 0, 3);
  natureInput(2, 3, 3);
  natureInput(3, 3, 0);
};

const natureInput = (corner, row, col, value) => {
  row = row > totalRow - 1 ? totalRow - 1 : row;
  col = col > totalCol - 1 ? totalCol - 1 : col;
  value = value === undefined ? nature[corner][getRandomInt(3)] : value;
  if (value === 0) return;

  const rowColAddition =
    movingPattern[corner][closestnatureIndex(corner, value)];

  if (network[row + rowColAddition[0]][col + rowColAddition[1]] == 0) {
    network[row + rowColAddition[0]][col + rowColAddition[1]] = value;
  } else {
    network[row + rowColAddition[0]][col + rowColAddition[1]]++;
    natureInput(
      corner,
      row + rowColAddition[0],
      col + rowColAddition[1],
      value - 1
    );
  }
};

const closestnatureIndex = (corner, value) => {
  let closest = -1;
  let closeDiff = -1;

  for (let i = 0; i < nature[corner].length; i++) {
    if (Math.abs(arr[i] - value) < closeDiff || closest === -1) {
      closeDiff = Math.abs(arr[i] - value);
      closest = arr[i];
    }
  }

  return nature[corner].findIndex(closest);
};

const getRandomInt = (max) => Math.floor(Math.random() * max);
