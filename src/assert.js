export function assert(value, expected) {
}

export function _equal(value, expected) {
  if (value === expected) {
    return true;
  }
  return false;
}

export function equal(value, expected) {
  if (!_equal(value, expected)) {
    throw 'error';
  } else {
    return true;
  }
}

export function _deepEqual(value, expected) {
}

export function deepEqual(value, expected) {
}
