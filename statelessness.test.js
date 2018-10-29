const {
  adjust,
  map,
  nth,
  findLastIndex,
  pipe,
  tap,
  isNil,
  update,
} = require('ramda');

const Grid = (rows, cols) => {
  return new Array(rows).fill(
    new Array(cols).fill(null)
  )
};

const findEmptyRow = (grid, col) => {
  return pipe(
    map(nth(col)),
    findLastIndex(isNil)
  )(grid)
};

const addCounter = (grid, col, counter) => {
  const row = findEmptyRow(grid, col);
  return adjust(update(col, counter), row, grid)
};

test('Manage state without mutation', () => {
  const grid1 = Grid(3, 3);
  const grid2 = addCounter(grid1, 1, "0");
  const grid3 = addCounter(grid2, 1, "X");
  const grid4 = addCounter(grid3, 1, "0");
  console.log(grid4);
  expect(grid4).toEqual([
    [null, "0", null],
    [null, "X", null],
    [null, "0", null],
  ])
});