var word = require('./word')
var inquirer = require('inquirer')

var wordLibrary = [
    ['n','a','c','h','o','s'],
    ['t','a','c','o','s'],
    ['t','h','a','i'],
    ['k','o','m','b','u','c','h','a']
]

let datWord;
let hiddenWord;



var consoleHangman = {
    resetGame: () => {
        this.setWord();
        this.remGuesses = 15;
        
    },
    remGuesses: 15,
    //datWord: '',
    //couldn't get variable to hold updated value
    //outside of the object
    setWord: () => {
        let randNum = Math.floor(Math.random() * wordLibrary.length)
        console.log(randNum);
        datWord = wordLibrary[randNum]
        console.log(datWord)
        consoleHangman.setWord(datWord)
    },
    userGuess: () => {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'play',
                message: 'Would you like to play hangman?'
            }.then(function(response){
                if(!response.play){
                    return;
                }
                consoleHangman.setWord()
            })
        ])
    },
    createWord: () => {
        hiddenWord = new word.Word(datWord)
    }
}

consoleHangman.setWord()

console.log(`outer reference ${datWord}`)

