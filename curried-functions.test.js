const { curry, __ } = require('ramda');
const { pbkdf2 } = require('crypto');

const keyGen = curry(pbkdf2);
const salt = 'someuniquestringforsalt';
const iterations = 1000;
const len = 24;
const digest = 'sha512';
const keyGenWithPassword = keyGen('cats12')(salt)(iterations)(len)(digest);
const stored = '3d9a592b9afd5292d4b018ca0cba9f79f36af6692adf77a8';
const verify = keyGen(__, salt, iterations, len, digest);


test('will hash a password string', done => {
  keyGenWithPassword((err, key) => {
    expect(key instanceof Buffer).toBe(true)
    console.log(key.toString('hex'));
    done()
  })
})

test('should verify a password string', done => {
  verify('cats12')((err, key) => {
    expect(key.toString('hex')).toEqual(stored)
    done()
  })
})