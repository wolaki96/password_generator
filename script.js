// Assignment code here



// Get references to the #generate element, create a password
var generateBtn = document.querySelector("#generate");




// variables for password

var numbers = "0123456789";
var specialCharacters = "!@#$%^&*_-+=";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characters = "";
var length
var endResult





// writing the password prompts
function writePassword(){
  characters = "";
  let text = "Do you want numbers in your password?"
  if (confirm(text)== true) {
     (characters += numbers);
   }
  else {
    text = "No numbers added.";
    console.log(text);
  }
  // special characters
  let text2 = "Do you want special characters in your password?"
  
  if (confirm(text2)== true){
      (characters += specialCharacters);
  }
  else {
    text2 = "No special characters added.";
    console.log(text2);
  }
  // lowercase letters
  let text3 = "Do you want lowercase letters?"
  
  if (confirm(text3)== true){
      (characters += lowerLetters);
    }
    else {
      text3 = "No lowercase letters added."
      console.log(text3);
    }
  // uppercase letters
  let text4 = "Do you want uppercase letters?"
  
  if (confirm(text4)== true){
    (characters += upperLetters);
  }
    else {
      text4 = "No uppercase letters added.";
      console.log(text4);
    }
console.log(characters);
// length of password
length = prompt("How many characters do you want the password to be? Pick 8-128 characters.");
  for (let i=0; i<Infinity; i++){
    if (length >= 8){
      if (length <= 128){
        break;
      }
    }
    length = prompt("Please re-enter your number. Pick 8-128 characters.");
  }
  // endresult password generated
  
  endResult = generatePassword (length, characters);
  console.log(endResult);
  var passwordText = document.querySelector("#password");
  passwordText.value = endResult;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


//  for loop to generate passwords
function generatePassword (length, characters) {
  let password = "";
  for (let i = 0; i < length; i++){
    console.log(i);
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    
}
return password;

};


// document.getElementById("Generated Password").innerHTML = password;

// document.getElementById("Generated Password").innerHTML = password;

// a password is generated that matches the criteria



// password is generated
// password is either displayed in an alert or written to the page