//const factorial = require('../src/main/Javascript/factorial.js');

QUnit.module('factorial');

QUnit.test('input = 0', assert => {
  assert.equal(factorial(0), 1);
});

QUnit.test('input = 1', assert => {
  assert.equal(factorial(1), 1);
});

QUnit.test('input = 7', assert => {
  assert.equal(factorial(7), 5040);
});

QUnit.test('input = 7', assert => {
  assert.equal(factorial(7), 5);
});

QUnit.test('input = 8', assert => {
  assert.equal(factorial(8), 21540);
});

QUnit.test('input = -100', assert => {
  assert.equal(factorial(-100), -1);
});