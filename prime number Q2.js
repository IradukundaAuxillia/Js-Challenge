// Prime numbers
// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.


const checkPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const getPrimeNumber = (values) => {
    return values.filter((x) => checkPrimeNumber(x));
  };
  
  console.log(getPrimeNumber([10, 20, 30, 40]));
  