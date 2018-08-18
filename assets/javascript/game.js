
//The list of words from which one word will be chosen randomly for each round of play
let listOfWords = ["sufficiently", "conditional", "arbitrary", "conceptual", "transitory", "barter", "antithesis", "longitude", "latitude", "victorious","recharged", "instrumentation", "constraint", "groundwater", "transphobia", "isolationist", "infringement", "objective", "varietal", "configuration", "humanism", "philosophy", "tolerance", "acquisitions", "biodiversity",
    "snowboard", "subjective", "coordinated", "strategize", "controversy", "legendary", "artfully", "antibiotics", "kombucha", "examinations", "departmental", "terminology", "gentleman", "reproduce", "ethical", "roommates", "relaxing", "spokesperson", "activists", "pizza", "encouraging", "assembly", "restructuring", "finals", "simulations", "physics", "creations", "hypothesis",
    "probiotics", "commitment", "literally", "therapy", "promised", "hereafter", "organisms", "telescope", "advancement", "harassment", "replication", "inexpensive", "receptors", "interventions", "internship", "artisanal", "microscope", "athletics", "ignorance", "indifference", "protein", "magnificent", "paintball", "supervisor", "communism", "entrepreneurs", "excitement",
    "citizenship", "informative", "hierarchy", "influence", "checklist", "management", "international", "innovation", "education", "community", "technology", "following", "resources", "description", "accessories", "application", "financial", "equipment", "performance", "scenarios", "extraction", "utilization", "beverages", "calibration", "efficient", "entertaining", "prerequisite",
    ]; 

//When page loads, #1 below will run 
// 1.) guesses left and randWord are given an empty string in global scope to be used in later functions
let gLeft = "";
let randWord = "";
//wins and losses are set to zero and written in html.
let wins = 0;
document.querySelector('#wins').innerHTML = wins;
let loses = 0;
document.querySelector('#loses').innerHTML = loses;
//Declaring empty arrays as variables in global scope to be used below in the hiddenWordArray()
let splitWord = [];
let hiddenArr = [];
let pGuess = [];
//declares the start function
function start() {
   //The compChooses() function here makes the computer choose a randWord from listOfWords..
    function compChooses(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        };   
    randWord = compChooses(listOfWords);
    console.log(randWord);
//The count of guessesLeft is written on the page with innerHTML
    let gLeft = 10;
    document.querySelector('#guessesLeft').innerHTML = gLeft;

//this splits the letters of randWord (a string) into an array, called splitWord
    splitWord = randWord.split('');
    console.log(splitWord);
//this creates "_" for each splitWord letter 
    function hiddenWordArray() {
        hiddenArr = splitWord.map(function () {
            return '_';
            });
    };
//this calls the hiddenWordArray function, above
    hiddenWordArray();
//this writes the hiddenArr (which is the randWord with all letters replaced with underscores) in html on the pg
    document.querySelector('#hiddenWord').innerHTML = hiddenArr;
};
//this calls the start function, above
start();

// 2.) When user enters any letter key into the textbox, the below will run    
document.onkeyup = function(event){
// changes all letter inputs to Lower Case so it matches the case in all my arrays
    let letter = event.key.toLowerCase();
//creates an array of player guesses called pGuess, which will add on each letter the user enters 
    pGuess.push(letter);
//this loop decides if any user-entered letter in the pGuess array is the same as any element in splitWord array    
    //for (i = 0; i < pGuess.length; i++) {  
        
            //hiddenArr.replace("_",  )
            
        //} 
//The above if / else says that if the player's guessed letter is in the word, 
//then replace the appropriate underscore in hiddenArr with the appropriate letter of splitWord.         

//the below says if player enters a letter that is not in the word, then guesses left decreases by
// 1 and is written in html on the page each time.        
    if (splitWord.indexOf(letter) < 0) {
        gLeft--;
        document.querySelector('#guessesLeft').innerHTML = `${gLeft}`; 
    }
};

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
// }