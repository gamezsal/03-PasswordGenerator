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
CharTypeLength = parseInt(prompt("How many characters would you like your password to contain?"))
CharTypeUcConfirm = confirm("Would you like to include Upper case Characters in your Password?")
CharTypeLcConfirm = confirm("Would you like to include Lower case Characters in your Password?")
CharTypeNumConfirm = confirm("Would you like to include Numbers in your Password?")
CharTypeSpecialConfirm = confirm("Would you like to include Special Characters in your Password?")
TotalCharTypes = "";
}

while (TotalCharTypes === "" || CharTypeLength < 8 || CharTypeLength > 128){
  CharTypeUserInput();

if(TotalCharTypes === "" || CharTypeLength < 8 || CharTypeLength > 128 ){
alert("Please try again, you must enter numbers and specify the length of charachters between 8-128.")
}
// User Confirmation Inputs
if(CharTypeUcConfirm === false){
  TotalCharTypes = TotalCharTypes + CharTypeUcList;
}

if(CharTypeLcConfirm === false){
  TotalCharTypes = TotalCharTypes + CharTypeLcList;
}

if(CharTypeNumConfirm === false){
  TotalCharTypes = TotalCharTypes + CharTypeNumList;
  }

if(CharTypeSpecialConfirm === false){
  TotalCharTypes = TotalCharTypes + CharTypeSpecialList;
  } 
} 

for(var i = CharTypeLength; i > 0; i--){
  ChartTypeIndex = Math.floor(Math.random() * TotalCharTypes.length);
  CharTypeAdder = TotalCharTypes[ChartTypeIndex];
  CharTypePassword = CharTypePassword + CharTypeAdder;
 }return(CharTypePassword);   
}
