// Palindrome
// Write a function that takes a string and returns true/false based on whether it is a palindrome or not (you can use a dictionary to know what a palyndrom is).



const checkPalindrome = (word) => {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    if (word === reversed) {
      console.log(word + " is palidrome");
    } else {
      console.log(word + " is not palidrome");
    }
  };
  
  checkPalindrome("madam");
  