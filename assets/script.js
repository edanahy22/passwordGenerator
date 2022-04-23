// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for characters included in generated passwords
let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '-', '=', '.', ',', ':', ';', '<', '>', '/', '_', '~', '`', '|', '(', ')', '{', '}', '[', ']'];
let possibleChar = [];
let finalPass = [];

// Randomization function for arrays, will randomize characters
function randGen(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex]
  return randomElement;
}

function generatePassword() {
  // Convert entered string into number
  var passwordLength = parseInt(window.prompt('Please select the number of characters for your password. (This password must have at least 8 characters and no more that 128 characters)'));

  // Determine length of desired password between 8-128 characters, if not, alerted to put accepted number and to start over
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a number between 8-128.');
    return null;
  }

  // Confirm prompts to determine character types for password
  let capLetterConfirm = window.confirm('Would you like this password to include uppercase letters?');
  let letterConfirm = window.confirm('Would you like this password to contain lowercase letters?');
  let numberConfirm = window.confirm('Would you like this password to contain numbers?');
  let characterConfirm = window.confirm('Would you like this password to include special characters?');

  // Based on confirms determines which character types to include in final password
  if (!capLetterConfirm && !letterConfirm && !numberConfirm && !characterConfirm) {
    window.alert('Must select at least one charcter type.');
    return null;
  }

  // if character type is confirmed, final password will make sure to push at least one of that type into final password
  if (capLetterConfirm) {
    possibleChar = possibleChar.concat(bigLetters);
    finalPass.push(randGen(bigLetters));
    passwordLength--;
  }

  if (letterConfirm) {
    possibleChar = possibleChar.concat(smallLetters);
    finalPass.push(randGen(smallLetters));
    passwordLength--;
  }

  if (numberConfirm) {
    possibleChar = possibleChar.concat(numbers);
    finalPass.push(randGen(numbers));
    passwordLength--;
  }

  if (characterConfirm) {
    possibleChar = possibleChar.concat(specialCharacters);
    finalPass.push(randGen(specialCharacters));
    passwordLength--;
  }

  console.log('possiblecharacters', possibleChar)

  // Loop through array to produce randomly generated characters from selected types and selected length 
  for (let i = 0; i < passwordLength; i++) {
    var possibleCharacters = randGen(possibleChar)

    finalPass.push(possibleCharacters)
  }

  // returns final password and join contents in array without commas inbetween
  console.log('final password', finalPass);
  return finalPass.join('')
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





