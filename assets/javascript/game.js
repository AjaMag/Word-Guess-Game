
//This is the list of words from which one word will be chosen randomly for each round of play
let listOfWords = ["sufficiently", "conditional", "arbitrary", "conceptual", "transitory", "barter", "antithesis", "longitude", "latitude", "victorious","recharged", "instrumentation", "constraint", "groundwater", "transphobia", "isolationist", "infringement", "objective", "varietal", "configuration", "humanism", "philosophy", "tolerance", "acquisitions", "biodiversity",
    "snowboard", "subjective", "coordinated", "strategize", "controversy", "legendary", "artfully", "antibiotics", "kombucha", "examinations", "departmental", "terminology", "gentleman", "reproduce", "ethical", "roommates", "relaxing", "spokesperson", "activists", "pizza", "encouraging", "assembly", "restructuring", "finals", "simulations", "physics", "creations", "hypothesis",
    "probiotics", "commitment", "literally", "therapy", "promised", "hereafter", "organisms", "telescope", "advancement", "harassment", "replication", "inexpensive", "receptors", "interventions", "internship", "artisanal", "microscope", "athletics", "ignorance", "indifference", "protein", "magnificent", "paintball", "supervisor", "communism", "entrepreneurs", "excitement",
    "citizenship", "informative", "hierarchy", "influence", "checklist", "management", "international", "innovation", "education", "community", "technology", "following", "resources", "description", "accessories", "application", "financial", "equipment", "performance", "scenarios", "extraction", "utilization", "beverages", "calibration", "efficient", "entertaining", "prerequisite",
    ]; 

// 1.) When page loads, the count of guessesLeft is written on the page with innerHTML
let gLeft = 10;
document.querySelector('#guessesLeft').innerHTML = gLeft;
//wins, loses, and randWord are given an empty string in global scope to be used in later functions
let wins = "";
let loses = "";
let randWord = "";

//declares the start function
function start() {
   //compChooses() function here makes the computer choose a randWord from listOfWords..
    function compChooses(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }   
    randWord = compChooses(listOfWords);
    console.log(randWord);
    //wins and losses are set to zero and written in html.
    let wins = 0;
    document.querySelector('#wins').innerHTML = wins;
    let loses = 0;
    document.querySelector('#loses').innerHTML = loses;
    //here I need a hiddenWord() function which counts each letter in the randWord and writes them as underscores
}
//this calls the start function, above
start() 

//declare empty arrays as variables to be used below
let splitWord = [];
let hiddenArr = [];
//this splits the letters of randWord into the splitWord array
splitWord = randWord.split('');
console.log(splitWord);

//this creates "_" for every splitWord letter 
function hiddenWordArray() {
    hiddenArr = splitWord.map(function () {
       return '_';
       console.log(x = hiddenArr.join(''));
       document.querySelector('#hiddenWord').innerHTML = x;
       });
}
hiddenWordArray();


//             else{
//                 //all the letters are "_"
//                 loses++
//             }
//         //{
            //`;
//             }
//         //}
// }   

// 2.) The onkeyup event below replaces the underscores in randWord with correct key-input     
// document.onkeyup = function(event){
//     //to Lower Case so it matches the case in all my arrays
//     let letter = event.key.toLowerCase();
//creates an array of playerGuesses called pGuess
//      pGuess = [];
//      pGuess.push(letter)      
//After going through myLetter array, I have the index for each, so I need determine: 
//if that player's guessed letter is in the word, then replace that letter. If its not in the word, 
//then player loses a guess and then guesses again.



      //'hiddenWord'.appendChild(correct);
      //correct.appendChild(guess);

    //this writes the correct Guesses on the pg in html
    //document.querySelector('#hiddenWord');
    
    //this writes the resulting underscores on the page in HTML
    //document.querySelector('#hiddenWord').innerHTML = 
    // hRandWord;

//runs the play function




    
// winGame: function() {
//   //if player has entered all letters in the Word
//   alert("You won! The correct word is: " + word([i]));
//   //wins++
//   //runs start function
// },

// loseGame: function() {
//   if count = 0  
//   alert("Sorry, you lost.. the correct word was: " + word([i]));
//   //losses++
//   //runs start function  
// },
// 
// },