let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;

assert.equal(hello('Test'), 'Привет, Test');



assert.equal(plural(0, "раз", "раза", "раз"), "раз")
assert.equal(plural(1, "раз", "раза", "раз"), "раз")
assert.equal(plural(2, "раз", "раза", "раз"), "раза")
assert.equal(plural(3, "раз", "раза", "раз"), "раза")
assert.equal(plural(8, "раз", "раза", "раз"), "раз")
assert.equal(plural(13, "раз", "раза", "раз"), "раз")
assert.equal(plural(100, "раз", "раза", "раз"), "раз")
assert.equal(plural(157, "раз", "раза", "раз"), "раз")

