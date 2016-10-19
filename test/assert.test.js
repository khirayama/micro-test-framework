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

test('_deepEqual > object', t => {
  const value = {
    name: 'khirayama',
    age: 27,
  };

  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: 27,
  }), true);
  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: '27',
  }), false);
  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: '27',
    birth: '02/06',
  }), false);
});

test('_deepEqual > nested object', t => {
  const value = {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  };

  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  }), true);
  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'ruby'],
    status: {language: 'ja'}
  }), false);
  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'en'}
  }), false);
  t.is(_deepEqual(value, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'en', engineer: true}
  }), false);
});

test('_deepEqual > array', t => {
  const value = ['khirayama', 27];
});

test('_deepEqual > object array', t => {
  const value = [{
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  }, {
    name: 'my friend',
    age: 27,
    skills: ['ruby', 'other'],
    status: {language: 'en'}
  }];
});
