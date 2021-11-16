export class Calculator {
  get [Symbol.toStringTag]() {
    return "Calculator";
  }
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 === 0) {
      return NaN;
    }
    return num1 / num2;
  }
}

export class ScientificCalculator extends Calculator {
  get [Symbol.toStringTag]() {
    return "ScientificCalculator";
  }
  sin(deg) {
    console.log(Math.sin(Math.PI / 2));
    return Math.sin(deg);
  }
  cos(deg) {
    return Math.cos(deg);
  }
  tan(deg) {
    return Math.tan(deg);
  }
  log(number) {
    return Math.log(number);
  }
}
export const withSummation = (props) => {
  const total = 0;
  const calculator = new Calculator();

  for (const arg in props) {
    total = calculator.add(total, props[arg]);
  }
  return total;
};
export const AsBusinessCalculator = (classObj) => {
  return classObj;
};
