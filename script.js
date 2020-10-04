// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Variable Declaration
  var CharTypeUcList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var CharTypeLcList = "abcdefghijklmnopqrstuvwxyz";
  var CharTypeNumList = "1234567890";
  var CharTypeSpecialList = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?";


  // Characters Types
  var TotalCharTypes = "";
  var CharTypeUcConfirm = "";
  var CharTypeLcConfirm = "";
  var CharTypeNumConfirm = "";
  var CharTypeSpecialConfirm = "";
  var ChartTypeIndex = "";
  var CharTypeAdder = "";
  var CharTypePassword = "";


  CharTypeUserInput();


  function CharTypeUserInput() {
    TotalCharTypes = "";

    // Prompt Password Length (8-128 Characters)
    CharTypeLength = parseInt(prompt("How many characters would you like your password to contain?"))
    if (isNaN(CharTypeLength)) {
      alert("Please try again, you must enter numbers and specify the length of charachters between 8-128.");
      return;
    } else if (CharTypeLength < 8 || CharTypeLength > 128) {
      alert("Please try again, you must enter numbers and specify the length of charachters between 8-128.");
      return;
    }

    // Confirm Upper Case
    CharTypeUcConfirm = confirm("Would you like to include Upper case Characters in your Password?")
    //Confirm Lower Case
    CharTypeLcConfirm = confirm("Would you like to include Lower case Characters in your Password?")
    //Confirm Numbers
    CharTypeNumConfirm = confirm("Would you like to include Numbers in your Password?")
    //Confirm Special Characters
    CharTypeSpecialConfirm = confirm("Would you like to include Special Characters in your Password?")
  }

  //Inputs Statements
  if (CharTypeUcConfirm === true) {
    TotalCharTypes = TotalCharTypes + CharTypeUcList;
  }

  if (CharTypeLcConfirm === true) {
    TotalCharTypes = TotalCharTypes + CharTypeLcList;
  }

  if (CharTypeNumConfirm === true) {
    TotalCharTypes = TotalCharTypes + CharTypeNumList;
  }

  if (CharTypeSpecialConfirm === true) {
    TotalCharTypes = TotalCharTypes + CharTypeSpecialList;
  }

  //  Password Generator
  for (var i = CharTypeLength; i > 0; i--) {
    ChartTypeIndex = Math.floor(Math.random() * TotalCharTypes.length);
    CharTypeAdder = TotalCharTypes[ChartTypeIndex];
    CharTypePassword = CharTypePassword + CharTypeAdder;
  } return (CharTypePassword)
}





