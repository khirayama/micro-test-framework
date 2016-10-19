import test from 'ava';

import {
  assert,
  equal,
  _equal,
  deepEqual,
  _deepEqual
} from '../src/assert';

test('_equl', t => {
  const value = 'hello world';

  t.is(_equal(value, 'hello world'), true);
  t.is(_equal(value, 'Hello world'), false);
});

test('equl', t => {
  const value = 'hello world';

  t.is(equal(value, 'hello world'), true);
  t.throws(() => equal(value, 'Hello world'));
});
