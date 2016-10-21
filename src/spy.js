const mock = {
  spy: () => {
    function spy() {
      spy.count += 1;
    };
    spy.count = 0;
    return spy;
  },
  stub: (obj, key, stub) => {
    const method = obj[key];

    stub.restore = () => {
      obj[key] = method;
    };
    obj[key] = stub;
  }
};

export default mock;
