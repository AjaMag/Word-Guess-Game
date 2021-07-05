//The list of words from which one word will be chosen randomly for each round of play
let listOfWords = ["sufficiently", "conditional", "arbitrary", "conceptual", "transitory", "barter", "antithesis", "longitude", "latitude", "victorious","recharged", "instrumentation", "constraint", "groundwater", "transphobia", "isolationist", "infringement", "objective", "varietal", "configuration", "humanism", "philosophy", "tolerance", "acquisitions", "biodiversity",
    "snowboard", "subjective", "coordinated", "strategize", "controversy", "legendary", "artfully", "antibiotics", "kombucha", "examinations", "departmental", "terminology", "gentleman", "reproduce", "ethical", "roommates", "relaxing", "spokesperson", "activists", "pizza", "encouraging", "assembly", "restructuring", "finals", "simulations", "physics", "creations", "hypothesis",
    "probiotics", "commitment", "literally", "therapy", "promised", "hereafter", "organisms", "telescope", "advancement", "harassment", "replication", "inexpensive", "receptors", "interventions", "internship", "artisanal", "microscope", "athletics", "ignorance", "indifference", "protein", "magnificent", "paintball", "supervisor", "communism", "entrepreneurs", "excitement",
    "citizenship", "informative", "hierarchy", "influence", "checklist", "management", "international", "innovation", "education", "community", "technology", "following", "resources", "description", "accessories", "application", "financial", "equipment", "performance", "scenarios", "extraction", "utilization", "beverages", "calibration", "efficient", "entertaining", "prerequisite",
    ]; 

//When page loads, #1 below will run 
// 1.) guesses left and randWord are given an empty string in global scope to be used later
let gLeft = "";
let randWord = "";
//Declaring some globals to be used in start()
var a;
var answerArr = []; 

//this is what runs when the player loses
function gameLose() {
    if (gLeft == 0)  {
        document.getElementById('comment').innerHTML ="Sorry, you lost.. the correct word was: " + randWord;
        document.getElementById('gamePlay').innerHTML = "Refresh page another round!"
    }
}
//declares the start function
function start() {
   //The compChooses() function here makes the computer choose a randWord from listOfWords..
    function compChooses(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        };   
    randWord = compChooses(listOfWords);
    console.log(randWord);
//The count of guessesLeft is written on the page with innerHTML
    gLeft = 12;
    document.querySelector('#guessesR').innerHTML = gLeft;
//this is comments to user    
    document.getElementById('gamePlay').innerHTML = "Enter the letter key of your choice to play!"
//this loop through the length of randWord will write all the letters as "_" and store it in the answerArr
        for (let i = 0; i < randWord.length; i++) {
            answerArr[i] = "_";
        }
        a = answerArr.join(" ");
//the above join method returns the array without commas seperating each letter, and the below .innerHTML writes it on the page
    document.querySelector('#hiddenWord').innerHTML = a;
    console.log(a)
};
//when page loads this calls the start function, above
start();

//Declaring some globals to be used in the functions below
var pGuess = [];
var count = 0;
var x ;
var letter;
// 2.) When the user hits keys, the below "keyup" will run 
document.addEventListener('keyup', function(event) {
    // this first "if" condition looks only for letter keys
    if (event.which >= 65 && event.which <= 90) {
        // changes all letter inputs to Lower Case so it matches the case in all arrays
        letter = event.key.toLowerCase();
        //for the array of player guesses called pGuess, this adds each letter to the end of the pGuess array 
        pGuess.push(letter)
        //this writes all player guesses onto html
        document.querySelector('#guessedL').innerHTML = pGuess;
        
        //this function decides whether the player's letter input is in the randWord or not 
        function checkLetter() {
            for (let i = 0; i < randWord.length; i++) {
                if (randWord[i] === letter) {
                    answerArr[i] = letter;
                    //this writes a comment for the user on the page
                    document.getElementById('comment').innerHTML = "Your guess is a correct letter!"
                    //this writes the answerArr updated with user-chosen letters onto the page
                    document.getElementById('hiddenWord').innerHTML = answerArr.join(" ");
                }
                if (answerArr.indexOf("_") === -1) {
                    document.getElementById('comment').innerHTML = "All correct! Congratulations! You win!"
                    document.getElementById('gamePlay').innerHTML = "Refresh page for another round!"
                }
            }
            //this says if the player chooses a letter NOT in the randWord..
            if (randWord.indexOf(letter) === -1)  {
                //this writes a comment for the user on html
                document.getElementById('comment').innerHTML = "Oops... that letter is not in the word.  Guess again!"
                // ...then player's guesses left is reduced by 1
                gLeft--
            }    
        } 
     //runs the checkLetter()    
     checkLetter();    
     gameLose();
    //writes the new amount of guesses left on the page
    document.getElementById('guessesR').innerHTML = gLeft;        
    }
//this else condition is for when user enters a non-letter key
    else {
        alert("The key you entered is not a valid choice... Please choose a letter")
    };    
})
// Checks if player guess is a repeated letter
    // var isInArray = pGuess.indexOf(letter);
    //     console.log("Already Picked")




