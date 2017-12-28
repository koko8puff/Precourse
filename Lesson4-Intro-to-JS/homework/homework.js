//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  let product = num * 10;
  return product;
}

function subtractFive(num) {
  // return num after subtracting five
  let subtraction = num - 5;
  return subtraction;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  // add x and y together and return the value
  let sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  let subrtaction = x - y;
  return subrtaction;
}

function divide(x, y) {
  // divide x by y and return the value
  let division = x / y;
  return division;
}

function multiply(x, y) {
  // multiply x by y and return the value
  let product = x * y;
  return product;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  let modulus = x % y;
  return modulus;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  let even = num % 2;
  if (even === 0) {
    return true;
  } else {
  return false;
    }
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  let modulus = num % 2;
  if (modulus === 1) {
    return true;
  } else {
    return false;
  }

}

function square(num) {
  // square num and return the new value
  let product = num * num;
  return product;
}

function cube(num) {
  // cube num and return the new value
  let product = Math.pow(num,3);
  return product;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  let product = Math.pow(num,exponent);
  return product;
}

function roundNumber(num) {
  // round num and return it
  let result = Math.round(num);
  return result;
}

function roundUp(num) {
  // round num up and return it
  let result = Math.ceil(num);
  return result;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  let str2 = '!';
  let result = str.concat(str2);
  return result;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  let result = firstName + ' ' + lastName;
  return result;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let greeting = 'Hello ' + name + '!';
  return greeting;
}

// If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  let rArea = length * width;
  return rArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  let tArea = base * height / 2;
  return tArea;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  let cArea = Math.round(Math.PI * radius * radius);
  return cArea;
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  let pVolume = length * width * height;
  return pVolume;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
