function curry(fn) {
  const expectedArgs = fn.length;
  function curried(...args) {
    if (args.length >= expectedArgs) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  }

  return curried;
}

function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(2)(3));
