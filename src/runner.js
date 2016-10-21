// Usecase
import test from 'micro-test-framework';

test.before(t => {
  t.context.before = 'before';
});

test.beforeEach(t => {
  t.context.beforeEach = 'beforeEach';
});

test('fuga', t => {
  t.equal();
  t.deepEqual();
})

test('hoga', t => {
  t.equal();
  t.deepEqual();
})

test.beforeEach(t => {
  t.context.beforeEach = 'afterEach';
});

test.before(t => {
  t.context.after = 'after';
});
