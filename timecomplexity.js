
// We would like to know if a particular array contains a majority element. An array has a majority element if there is at least one element that counts more than half of the size. 

const majority = (array) => {
    let decision = false;
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (j = 0; j < array.length; j++) {
        if (array[j] == array[i]) count += 1;
      }
      if (count > array.length / 2) {
        decision = true;
        break;
      }
    }
  
    decision
      ? console.log("This is a majority array")
      : console.log("This is not a majority array");
  };
  
  majority([3, 1, 3, 4, 4, 5, 3, 5, 7, 8, 8, 6, 3]);
  