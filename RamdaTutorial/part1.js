const R = require('ramda');

/**
 *  curry
 * 
 *  Returns a curried equivalent of the provided function.
 *  The curried function has two unusual capabilities.
 */

 // First, its arguments need not be provided one at a time. If f is a ternary function and g is R.curry(f), the following are equivalent.

g(1)(2)(3)
g(1)(2, 3)
g(1, 2)(3)
g(1, 2, 3)

// Secondly, the special placeholder value R.__ may be used to specify "gaps", allowing partial application of any combination of arguments, regardless of their positions. If g is as above and _ is R.__, the following are equivalent.

g(1, 2, 3)
g(_, 2, 3)(1)
g(_, _, 3)(1)(2)
g(_, _, 3)(1, 2)
g(_, 2)(1)(3)
g(_, 2)(1, 3)
g(_, 2)(_, 3)(1)


/**
 *  add
 *   
 *  add two values.
 */

 R.add(2,3);    // => 5
 R.add(7)(10);  // => 17


/**
 *  subtract
 * 
 *  Subtract its second argument from its first argument.
 */

const dec1 = R.subtract(1, R.__);
const dec2 = R.subtract(R.__, 1);

console.log(dec1(10));    // => -9
console.log(dec2(10));    // => 9