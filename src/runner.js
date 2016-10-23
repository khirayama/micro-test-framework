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

import {equal} from './assert';

class Tester {
  constructor() {
    this.context = null;
  }
  equal(actual, expected) {
    try {
      equal(actual, expected);
    } catch(error) {
    }
  }
}

const runner = (testName, testCase) => {
  const tester = new Tester();
  testCase(tester);
};

export default runner;
