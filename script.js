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

function generatePassword(){
// Variable Declaration
var CharTypeUcList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var CharTypeLcList = "abcdefghijklmnopqrstuvwxyz";
var CharTypeNumList = "1234567890";
var CharTypeSpecialList = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?";


// Characters Allowed
var TotalCharTypes = "";

var CharTypeUcConfirm = "";
var CharTypeLcConfirm = "";
var CharTypeNumConfirm = "";
var CharTypeSpecialConfirm = "";
var ChartTypeIndex = "";
var CharTypeAdder = "";
var CharTypePassword = "";



// Prompt Password Length (8-128 Characters)
function CharTypeUserInput(){
TotalCharTypes = "";
CharTypeLength = parseInt(prompt("How many characters would you like your password to contain?"))
CharTypeUcConfirm = confirm("Would you like to include Upper case Characters in your Password?")
CharTypeLcConfirm = confirm("Would you like to include Lower case Characters in your Password?")
CharTypeNumConfirm = confirm("Would you like to include Numbers in your Password?")
CharTypeSpecialConfirm = confirm("Would you like to include Special Characters in your Password?")
}
  

while (TotalCharTypes === "" || CharTypeLength < 8 || CharTypeLength > 128){
    CharTypeUserInput();
// User Confirmation Inputs

if(CharTypeUcConfirm === true){
  TotalCharTypes = TotalCharTypes + CharTypeUcList;
}

if(CharTypeLcConfirm === true){
  TotalCharTypes = TotalCharTypes + CharTypeLcList;
}

if(CharTypeNumConfirm === true){
  TotalCharTypes = TotalCharTypes + CharTypeNumList;
  }

if(CharTypeSpecialConfirm === true){
  TotalCharTypes = TotalCharTypes + CharTypeSpecialList;
  }

  if(TotalCharTypes === "" || CharTypeLength < 8 || CharTypeLength > 128){
    alert("Please enter a number")
  }
}

console.log(CharTypePassword)

for(var i = CharTypeLength; i > 0; i--){
  ChartTypeIndex = Math.floor(Math.random() * TotalCharTypes.length);
  CharTypeAdder = TotalCharTypes[ChartTypeIndex];
  CharTypePassword = CharTypePassword + CharTypeAdder;
 }
return(CharTypePassword);
   
  }

  // generatePassword()

