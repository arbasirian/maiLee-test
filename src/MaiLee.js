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
  calculate = (fn) => {
    return new Promise((resolve, reject) => {
      if (!fn) {
        reject(NaN);
      }

      const result = fn();
      resolve(result);
    });
  };
}

export class ScientificCalculator extends Calculator {
  get [Symbol.toStringTag]() {
    return "ScientificCalculator";
  }
  sin(deg) {
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
export const withSummation = () => {
  const calculator = new Calculator();

  Calculator.prototype.sum = function (...params) {
    return params.reduce((a, c) => calculator.add(a, c), 0);
  };
};

export const AsBusinessCalculator = (referenceClass) => {
  return class Sample extends referenceClass {
    get [Symbol.toStringTag]() {
      return "BusinessCalculator";
    }

    simpleInterest = function (p, r, t) {
      return Number((p * (r / 100) * t).toFixed(1));
    };
  };
};
