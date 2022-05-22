// Assignment code here
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["~","!","@","#","$","%","^","&","*","(",")",">","<","?","/","_","-","+","=","\\"];


function generatePassword() {
  var passwordArray = [];

  var length = prompt("Please enter the length you would like your password to be. Must be between 8 and 128 characters")
  if(length > 128 || length < 8){

  }else if(length <= 128 || length >= 8 ){

    //confirm prompts to decide what should be added to password array
    var lowercaseConfirm = confirm("Press Okay if you would like Lowercase Letters in your generated password, or cancel to not include them")
    var uppercaseConfirm = confirm("Press Okay if you would like Uppercase Letters in your generated password, or cancel to not include them")
    var numberConfirm = confirm("Press Okay if you would like Numbers in your generated password, or cancel to not include them")
    var specialConfirm = confirm("Press Okay if you would like Special Characters in your generated password, or cancel to not include them")
    var password = ""

    // adds array to main password array based on previous window.confirms
    // if none of the 
    if(lowercaseConfirm){
      passwordArray = passwordArray.concat(alphabet);
    }
    if(uppercaseConfirm){
      passwordArray = passwordArray.concat(upperAlphabet);
    }
    if(numberConfirm){
      passwordArray = passwordArray.concat(numbers);
    }
    if(specialConfirm){
      passwordArray = passwordArray.concat(special);
    }
    if(!specialConfirm && !numberConfirm && !uppercaseConfirm && !lowercaseConfirm){
      alert("To generate a password, please select at least one option for password contents.");
    }

    //password generation loop
    if (lowercaseConfirm || uppercaseConfirm || numberConfirm || specialConfirm){
    for (var i = 0; i <= length; i++) {
      
      password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
    }
  }
    return password;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
