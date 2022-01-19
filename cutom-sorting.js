// Custom sorting
// Write a function that sorts an array in a descending order. The exception is that if it encounters a prime number, it should erase it from the array. 


const checkPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const sortArray = (array) => {
    let swap;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          swap = array[i];
          array[i] = array[j];
          array[j] = swap;
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (checkPrimeNumber(array[i])) {
        array.splice(i, 1);
      }
    }
    return array;
  };
  
  console.log(sortArray([2, 9, 6, 13, 1, 4, 5]));
  