export function equal(actual, expected) {
  if (!_deepEqual(actual, expected)) {
    throw 'error';
  } else {
    return true;
  }
}

export function _objEquiv(a, b) {
  const ka = Object.keys(a);
  const kb = Object.keys(b);

  if (ka.length !== kb.length) {
    return false;
  }
  ka.sort();
  kb.sort();
  for (let i = ka.length - 1; i >= 0; i--) {
    let key = ka[i];
    if (!_deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return typeof a === typeof b;
}

export function _deepEqual(actual, expected) {
  if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();
  } else if (
    !actual || !expected ||
    typeof actual != 'object' && typeof expected != 'object'
  ) {
    return actual === expected;
  } else {
    return _objEquiv(actual, expected);
  }
}
