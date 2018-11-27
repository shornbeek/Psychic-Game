

    //define variables for game play
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];


// set up array 
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// add a listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;

var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];
  
    // reset computer choice if the user loses
    if (guessesRemaining <= 0) {
      lossCount++;
      guessesRemaining = 10;
      guessedLetters = [];
  
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      
      console.log("You lost! " + "The computer picked " + computerChoice + " You picked " + userChoice);
      alert("You lost! " + "The computer picked " + computerChoice + " You picked " + userChoice);
      
      document.getElementById("lossCount").innerHTML = lossCount++;
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      
    }
    // compares the randomly selected computer choice and user choice
    else if (computerChoice === userChoice) {
       
      console.log("You Won! " + "The computer picked " + computerChoice + " You picked " + userChoice);
      alert("You Won! " + "The computer picked " + computerChoice + " You picked " + userChoice);
     
      
      guessedLetters = [];
      guessesRemaining = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      
   
      document.getElementById("winCount").innerHTML = winCount++;
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      computerChoiceText = document.getElementById("computerchoice-text");
      
    } else {

      guessedLetters.push(userChoice);
      console.log("Guess Again! " + "The computer picked " + computerChoice + " You picked " + userChoice);
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("computerchoice-text").innerHTML = computerChoice;
    }


}


