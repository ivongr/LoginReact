function isFunction(val: unknown): val is CallableFunction {
    return typeof val === 'function';
  }