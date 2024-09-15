function createTaxCalculator() {
  const taxBrackets = [
    { threshold: 10000, rate: 0.1 },
    { threshold: 30000, rate: 0.2 },
    { threshold: 100000, rate: 0.3 },
    { threshold: Infinity, rate: 0.4 },
  ];

  function calculateTax(income) {
    let tax = 0;
    let previousThreshold = 0;

    for (const bracket of taxBrackets) {
      if (income > bracket.threshold) {
        tax += (bracket.threshold - previousThreshold) * bracket.rate;
        previousThreshold = bracket.threshold;
      } else {
        tax += (income - previousThreshold) * bracket.rate;
        break;
      }
    }
    return tax;
  }
  return calculateTax;
}

const taxCalculator = createTaxCalculator();

console.log(taxCalculator(5000));
console.log(taxCalculator(15000));
console.log(taxCalculator(35000));
console.log(taxCalculator(120000));
