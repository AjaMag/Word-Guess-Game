
//This is the list of words from which one word will be chosen randomly for each round of play
let listOfWords = ["sufficiently", "conditional", "arbitrary", "conceptual", "transitory", "barter", "antithesis", "longitude", "latitude", "victorious","recharged", "instrumentation", "constraint", "groundwater", "transphobia", "isolationist", "infringement", "objective", "varietal", "configuration", "humanism", "philosophy", "tolerance", "acquisitions", "biodiversity",
    "snowboard", "subjective", "coordinated", "strategize", "controversy", "legendary", "artfully", "antibiotics", "kombucha", "examinations", "departmental", "terminology", "gentleman", "reproduce", "ethical", "roommates", "relaxing", "spokesperson", "activists", "pizza", "encouraging", "assembly", "restructuring", "finals", "simulations", "physics", "creations", "hypothesis",
    "probiotics", "commitment", "literally", "therapy", "promised", "hereafter", "organisms", "telescope", "advancement", "harassment", "replication", "inexpensive", "receptors", "interventions", "internship", "artisanal", "microscope", "athletics", "ignorance", "indifference", "protein", "magnificent", "paintball", "supervisor", "communism", "entrepreneurs", "excitement",
    "citizenship", "informative", "hierarchy", "influence", "checklist", "management", "international", "innovation", "education", "community", "technology", "following", "resources", "description", "accessories", "application", "financial", "equipment", "performance", "scenarios", "extraction", "utilization", "beverages", "calibration", "efficient", "entertaining", "prerequisite",
    ]; 
// 1.) When page loads..
function start() {
    //the count of guessesLeft written on page by innerhtml
   //compChooses(): computer chooses randWord from listOfWords..
    function compChooses(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }   
    let randWord = compChooses(listOfWords);
    console.log(randWord)
    //this changes each element in randWord to underscores 
    var replace = "regex";
    var re = new RegExp(replace,"g");
    hRandWord = randWord.replace(re, "_");
    console.log(hRandWord);
    //this writes the resulting underscores on the page in HTML
    //document.querySelector('#hiddenWord').innerHTML = 
    //`${hRandWord}`;
}
//runs the play function
start()
//the count of wins, and loses is written on the page with innerHTML
let gLeft = 10;
document.querySelector('#guessesLeft').innerHTML = 
`${gLeft}`;let wins = 0;
document.querySelector('#wins').innerHTML = 
`${wins}`;
let loses = 0;
document.querySelector('#loses').innerHTML = 
`${loses}`;

// 2.) The onkeyup event below replaces the underscores in randWord with correct key-input     
document.onkeyup = function(event){
    //to Lower Case so it matches the case in all my arrays
    let letter = event.key.toLowerCase();
    //creates an array of playerGuesses called pGuess
    pGuess = [];
    pGuess.push(letter)

for (var i = 0; i < pGuess.length; i++) {
    if (randWord.includes(pGuess)) {
    pGuess[i].innerHTML = `${randWord[i]}`;
            //}
        //}
}    
      //'hiddenWord'.appendChild(correct);
      //correct.appendChild(guess);
    //this writes the correct Guesses on the pg in html
    //document.querySelector('#hiddenWord');
    
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