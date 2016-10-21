import test from 'ava';

import {
  equal,
  _deepEqual
} from '../src/assert';

test('equl', t => {
  const actual = 'hello world';

  t.is(equal(actual, 'hello world'), true);
  t.throws(() => equal(actual, 'Hello world'));
});

test('_deepEqual > literal', t => {
  const actual = 'hello world';

  t.is(_deepEqual(actual, 'hello world'), true);
  t.is(_deepEqual(actual, 'Hello world'), false);
});

test('_deepEqual > object', t => {
  const actual = {
    name: 'khirayama',
    age: 27,
  };

  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: 27,
  }), true);
  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: '27',
  }), false);
  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: '27',
    birth: '02/06',
  }), false);
});

test('_deepEqual > nested object', t => {
  const actual = {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  };

  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  }), true);
  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'ruby'],
    status: {language: 'ja'}
  }), false);
  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'en'}
  }), false);
  t.is(_deepEqual(actual, {
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'en', engineer: true}
  }), false);
});

test('_deepEqual > array', t => {
  const actual = [
    'khirayama', 27
  ];

  t.is(_deepEqual(actual, [
    'khirayama', 27
  ]), true);
  t.is(_deepEqual(actual, [
    'khirayama', '27'
  ]), false);
  t.is(_deepEqual(actual, [
    'khirayama', 27, 'ja'
  ]), false);
});

test('_deepEqual > object array', t => {
  const actual = [{
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

  t.is(_deepEqual(actual, [{
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  }, {
    name: 'my friend',
    age: 27,
    skills: ['ruby', 'other'],
    status: {language: 'en'}
  }]), true);
  t.is(_deepEqual(actual, [{
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja'}
  }, {
    name: 'my friend',
    age: '27',
    skills: ['ruby', 'other'],
    status: {language: 'en'}
  }]), false);
  t.is(_deepEqual(actual, [{
    name: 'khirayama',
    age: 27,
    skills: ['javascript', 'other'],
    status: {language: 'ja', engineer: true}
  }, {
    name: 'my friend',
    age: 27,
    skills: ['ruby', 'other'],
    status: {language: 'en'}
  }]), false);
});
