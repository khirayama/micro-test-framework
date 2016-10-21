// // Usecase
// import test from 'micro-test-framework';
//
// test.before(t => {
//   t.context.before = 'before';
// });
//
// test.beforeEach(t => {
//   t.context.beforeEach = 'beforeEach';
// });
//
// test('fuga', t => {
//   t.equal();
// })
//
// test('hoga', t => {
//   t.equal();
// })
//
// test.beforeEach(t => {
//   t.context.beforeEach = 'afterEach';
// });
//
// test.before(t => {
//   t.context.after = 'after';
// });

class Tester {
  constructor() {
    this.context = null;
  }
  equal() {
  }
}

const test = (testName, testCase) => {
  const tester = new tester();
  testCase();
};

export default test;
