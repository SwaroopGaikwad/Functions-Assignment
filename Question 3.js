(function () {
  const number = 16;
  const square = number * number;
  console.log(`The square of ${number} is ${square}.`);
})();

/// Named function expression
(function calculateAndDisplaySquare() {
  const number = 50;
  const square = number * number;
  console.log(`The square of ${number} is ${square}.`);
})();
