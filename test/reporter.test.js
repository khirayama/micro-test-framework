import test from 'ava';

import reporter from '../src/reporter';

test('reporter', t => {
  t.notThrows(() => {
    reporter();
  });
});
