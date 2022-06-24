const add = function(numA, numB) {
	return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(ar) {
  let result = 0;
  for(let value of ar){
    result += value;
  }
	return result;
};

const multiply = function(...args) {
  const ar = Array.from(...args);
  let result = ar[0];
  for (let i = 0; i < ar.length -1; i++) {
    result *= ar[i+1];
  }
  return result;
};

const power = function(numA, numB) {
  return Math.pow(numA, numB);
};

const factorial = function(numA) {
  let result = numA * (numA-1);
  if(numA== 0 || numA == 1){
    return 1;
  }
  for(let i = 2; i < numA; i++){
    result = result * (numA-i);
  }
  return result;
};
console.log(factorial(0));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
