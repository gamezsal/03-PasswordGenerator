// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = setPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable Declaration
var CharTypeLength = 0;
var CharTypeSpecial = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?"
var CharTypeLc = "abcdefghijklmnopqrstuvwxyz";
var CharTypeUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var CharTypeNum = "1234567890";
var confirmCharTypeSpecial = "";
var confirmCharTypeLc = "";
var confirmCharTypeUc = "";
var confirmCharTypeNum = "";
var allCharTypes = "";



// Prompt Password Length (8-128 Characters)
function setPassword() {
CharTypeLength = parseInt(prompt("How many characters would you like your password to contain?"))
  if (CharTypeLength < 8 || CharTypeLength > 128){
    alert("Please try a number between 8 and 128.")
      setPassword() 
    console.log(CharTypeLength)
     }if (isNaN(CharTypeLength)){
    alert("Please try again, input a number.")
      setPassword()
     }else allCharTypes = allCharTypes.concat(CharTypeLength)

// User Confirmation Inputs
confirmCharTypeSpecial = confirm("Would you like to include Special Characters in your Password?")
  if(confirmCharTypeSpecial == true){
    allCharTypes = allCharTypes.concat(CharTypeSpecial);
  }

confirmCharTypeLc = confirm("Would you like to include Lower case Characters in your Password?")
  if(confirmCharTypeLc == true){
    allCharTypes = allCharTypes.concat(confirmCharTypeLc);
  }

confirmCharTypeUc = confirm("Would you like to include Upper case Characters in your Password?")
  if(confirmCharTypeUc == true){
    allCharTypes = allCharTypes.concat(confirmCharTypeUc)
  }

confirmCharTypeNum = confirm("Would you like to include Numbers in your Password?")
  if(confirmCharTypeNum == true){
    allCharTypes = allCharTypes.concat(confirmCharTypeNum)
  }
 
  console.log(CharTypeLength)
  console.log(confirmCharTypeSpecial)
  console.log(confirmCharTypeLc)
  console.log(confirmCharTypeUc)
  console.log(confirmCharTypeNum)
  console.log(allCharTypes)
}
 
// Add event listener to generate button



setPassword()
generateBtn.addEventListener("click", writePassword);
  

