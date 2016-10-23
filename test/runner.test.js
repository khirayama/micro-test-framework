import test from 'ava';

import runner from '../src/runner';

test('exist tester', t => {
  runner('test', tester => {
    t.is(tester.constructor.name, 'Tester');
    tester.equal('test', 'atest');
  });
});
