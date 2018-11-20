// const { compose, add, __, pipe } = require('ramda');

// const addFive = add(__, 5);
// const sqr = n => n * n;

// test('can compose functions', () => {
//   const five = compose(addFive, sqr);
//   const twentyFive = compose(sqr, addFive)

//   expect(five(0)).toBe(5)
//   expect(twentyFive(0)).toBe(25)
// })

// test('can pipe functions', () => {
//   const five = pipe(addFive, sqr);
//   const twentyFive = pipe(sqr, addFive)

//   expect(five(0)).toBe(25)
//   expect(twentyFive(0)).toBe(5)
// })

const { pbkdf2 } = require('crypto');
const { curry, pipe, __, always, splitAt, head, last, converge, partialRight, tap } = require('ramda');

const username = 'cat_lover';
const password = 'cats12';
const iterations = 1000;
const len = 24;
const digetst = 'sha512';

test('hashed passwords should match', done => {
  const keyGen = curry(pbkdf2)(password, __, iterations, len, digetst);
  const getHash = always('0409757bb520dfc434eb9252b1176082324af3134f71e247someuniquestringtoactasasalt');
  const match = (storedKey, salt) => {
    return keyGen(salt)(partialRight(cb, [storedKey]))
  }
  const cb = (err, key, storedKey) => {
    expect(key.toString('hex')).toEqual(storedKey)
    done()
  }
   
  const verify = pipe(
    getHash,
    splitAt(len * 2),
    tap(console.log),
    converge(match, [head, last])
  )
  verify('cat_lover')
})