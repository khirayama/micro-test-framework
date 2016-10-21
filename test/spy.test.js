import test from 'ava';

import mock from '../src/spy';

test('spy > single', t => {
  const callback = mock.spy();

  t.is(callback.count, 0);

  callback();

  t.is(callback.count, 1);
});

test('stub > method', t => {
  const Resource = {
    fetch: () => {
      return 'fetch';
    }
  };

  t.is(Resource.fetch(), 'fetch');

  mock.stub(Resource, 'fetch', () => {
    return 'stub';
  });

  t.is(Resource.fetch(), 'stub');

  Resource.fetch.restore();

  t.is(Resource.fetch(), 'fetch');
});

test('spy > multi', t => {
  const callback = mock.spy();
  const callback2 = mock.spy();

  t.is(callback.count, 0);
  t.is(callback2.count, 0);

  callback();

  t.is(callback.count, 1);
  t.is(callback2.count, 0);

  callback2();

  t.is(callback.count, 1);
  t.is(callback2.count, 1);

  callback();
  callback2();

  t.is(callback.count, 2);
  t.is(callback2.count, 2);
});
