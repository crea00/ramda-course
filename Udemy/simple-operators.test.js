const {
  add,
  subtract,
  concat
} = require('ramda');

test('imported add concat', () => {
  expect(add(2, 3)).toEqual(5)
  expect(concat('Hello', ' World')).toEqual('Hello World')
})