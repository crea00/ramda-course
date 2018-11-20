const { add } = require('ramda');

// const add = function(a, b) {
//   return function(b) {
//     return a + b
//   }
// }

describe.only('introduction to functional programming', () => {
  test('add with only 1 argument', () => {
    expect(typeof add(2)).toBe('function')
    expect(add(2)(3)).toBe(5)
  })
})