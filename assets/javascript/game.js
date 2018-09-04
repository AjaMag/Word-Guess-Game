
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
//Declaring some globals to be used in start()
var a;
var answerArr = []; 
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

//Declaring some globals to be used in the key up function below
var pGuess = [];
var count = 0;
var x ;
// 2.) When the user hits keys, the below "keyup" will run 
document.addEventListener('keyup', function(event) {
    // this first "if" condition looks only for letter keys
    if (event.which >= 65 && event.which <= 90) {
        // changes all letter inputs to Lower Case so it matches the case in all my arrays
        var letter = event.key.toLowerCase();
        //for the array of player guesses called pGuess, this adds each letter to the end of the pGuess array 
        pGuess.push(letter)
        //this writes all player guesses onto html
        document.querySelector('#guessedL').innerHTML = pGuess;
        //this function decides whether the player's letter input is in the randWord or not 
        function checkLetter() {
            for (let i = 0; i < randWord.length; i++) {
                if (randWord[i] === letter) {
                    answerArr[i] = letter;
                    document.getElementById('comment').innerHTML = "Your guess is correct!"
                } else {
                    document.getElementById('comment').innerHTML = "Oops!"
                }
            }   
        document.getElementById('hiddenWord').innerHTML = answerArr.join(" ");
        }
        checkLetter();
    }
    //if user hit a key that is a non-letter this will run
    else {
        alert("The key you entered is not a valid choice... Please choose a letter")
    };
})
     // if (var x = false) {
        //     
        //     

//     //the below says if player enters a letter that is not in the word, then guesses left decreases by
// // 1 and is written in html on the page each time.        
// // if (splitWord.indexOf(letter) < 0 {
// //    
// //      
// // })

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
// 2.) Checks if player guess is a repeated letter
// function isRepeatedKey(userGuess) {
//         var isInArray = pGuess.indexOf(userGuess);
//         return isInArray < 0 ? false : true;
//     };
// let splitWord = [];
// let hiddenArr = [];
//this splits the letters of randWord (a string) into an array, called splitWord
//     splitWord = randWord.split('');
//     console.log(splitWord);
// //this creates "_" for each splitWord letter 
//     function hiddenWordArray() {
//         hiddenArr = splitWord.map(function () {
//             return '_';
//             });
//         console.log(hiddenArr);
//         return hiddenArr;
//     };
//     //this calls the hiddenWordArray function
//     hiddenWordArray();

// let dashes = ""
// let dashes_temp = ""
// let count = 0
// var newStr = document.getElementById('hiddenWord').innerHTML;
// for (let i = 0; i < splitWord.length; i++) { 
//     // dashes = dashes + "_"
//     if (splitWord[i] === letter) {
//         console.log("needs replacing")
//         dashes_temp = newStr.replace(newStr.charAt[i], splitWord[i])
//     }
//     else {
//     console.log("stays as dash")
    
//      } 
//      console.log(newStr.charAt[i])           
// }
// count++ 
// console.log(dashes_temp)
// // var textnode = document.createTextNode(dashes_temp);
// // var textnode2 = document.createTextNode(hiddenArr);
// var item = document.getElementById("hiddenWord");
// item.appendChild(textnode) 
// item.appendChild(textnode2) 
// item.removeChild(textnode2)  

// console.log(item)  