// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable Declaration
var CharLength = 0;
var CharTypeSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=","|", "(", ")", "{","}", "[","]", ":",";", "<", ">", "?", "/"]
var CharTypeLc = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var CharTypeUc = ["A", "B", "C", "D", "E", "F", "G", "H","I","J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
var CharTypeNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
var confirmCharTypeSpecial ;
var confirmCharTypeLc;
var confirmCharTypeUc;
var confirmCharTypeNum;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt Password Length (8-128 Characters)
function setPassword() {
var PassLength = parseInt(prompt("How many characters would you like your password to contain?"))
  if (isNaN(PassLength)){
    alert("Please try again, input a number.");
    setPassword()
  } else if (PassLength < 8 || PassLength > 128){
    alert("Please try a number between 8 and 128.");
    setPassword()
  }

// User Confirmation Inputs
confirmCharTypeSpecial = confirm("Would you like include Special Characters in your password?");
confirmCharTypeLc = confirm("Would you like to include Lower case Characters in your Password?");
confirmCharTypeLc = confirm("Would you like to include Upper case Characters in your Password?");
confirmCharTypeLc = confirm("Would you like to include Numbers in your Password?");

}

// Add event listener to generate button



setPassword()
generateBtn.addEventListener("click", writePassword);
