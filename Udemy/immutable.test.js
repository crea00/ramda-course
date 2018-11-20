/**
 * 
 *  Many of javascript primitives are not immutable by default  
 * 
 *  Mutability in Javascript is a quality of its core primitives
 * 
 *  Functions array and objects can all be updated emplace for raise 
 *  the following methods will mutate to the array
 *  pop, push, splice, reverse, sort -> mutate
 * 
 *  Immutable primitives cannot be updated once they've been created
 *  map, filter, slice
 *  -> All of these will return a new copy of the original array 
 * 
 */
const {
  reverse,
  adjust,
  always,
} = require('ramda');
const a = [1, 2, 3 , 4];

test('Javascript is mutable', () => {
  const b = reverse(a)

  expect(a[0]).toBe(1)
  // b[0] is not a value, actually is a reference
  expect(b[0]).toBe(4)
})

test.only('updating an array', () => {
  const b = a;

  const update = adjust(always(10), 0, b);

  expect(update[0]).toBe(10)
  expect(a[0]).toBe(1)
  
})



