// Write a function that takes a formatted array. The array is made of a string of people’s identities in a predefined format, 
// “first-name second-name, age” . Ex “Patrick wyne, 30”


const myFunction = (array) => {
    let obj = {};
    array.map((item) => {
      const newArray = item.split(",");
      if (!obj[newArray[0]]) {
        obj[newArray[0]] = {
          second_name: newArray[1],
          age: newArray[2],
        };
      }
    });
    return obj;
  };
  
  console.log(myFunction(["Nice, ineza, 30", "Sharmant, Shami,25"]));
  