// Prime numbers
// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

// Note: if looping is needed, use only primitive for loop ( forearch, map, etc are not allowed).

const checkPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const getPrimeNumber = (values) => {
    let result = [];
    for (let i = 0; i < values.length; i++) {
      if (checkPrimeNumber(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  };
  
  console.log(getPrimeNumber([1, 2, 4, 5, 6, 7, 8, 9]));
  