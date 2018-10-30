/**
 * Ref : https://github.com/fantasyland/fantasy-land
 */

const { add } = require('ramda');

const add3 = add(3);

test('Fantasy Land', () => {
  expect([2].map(add3)).toEqual([5])
  expect([].map(add3)).toEqual([])

  const wrappedVal = [2]
  const wrappedFn = [add3]

  Array.prototype.ap = function(wrappedFn) {
    return wrappedFn.map(fn => fn(this[0]))
  }

  expect(wrappedVal.ap(wrappedFn)).toEqual([5])
})

