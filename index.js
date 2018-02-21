var Word = require('./word')
var inquirer = require('inquirer')

var wordLibrary = [
    ['n','a','c','h','o','s'],
    ['t','a','c','o','s'],
    ['t','h','a','i'],
    ['k','o','m','b','u','c','h','a']
]

let datWord;
let hiddenWord;
let currentWord;

var consoleHangman = {
    resetGame: () => {
        consoleHangman.setWord();
        consoleHangman.remGuesses = 15;
    },
    remGuesses: 15,
    //datWord: '',
    //couldn't get variable to hold updated value
    //outside of the object
    setWord: () => {
        let randNum = Math.floor(Math.random() * wordLibrary.length)
        datWord = wordLibrary[randNum]
        consoleHangman.createWord(datWord)
    },
    startGame: () => {
        consoleHangman.resetGame();
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'play',
                message: '---------------------\n\nWould you like to play hangman?\n\n---------------------------\n'
            }
        ]).then(function(response){
            if(!response.play){
                return;
            }
            consoleHangman.setWord()
            consoleHangman.userGuess()
        }).catch(function(error){
            console.log(error)
        })
    },
    userGuess: () => {
        if(currentWord && currentWord.indexOf('_')<0){
            currentWord = '_';
            console.log('You win!')
            consoleHangman.startGame()
            return;
        }
        if(consoleHangman.remGuesses<1){
            console.log('You lose! sorry')
            currentWord = '_';
            consoleHangman.startGame()
            return
        }
        inquirer.prompt([
            {
                name: 'guess',
                message: '\n\nplease guess a letter'
            }
        ]).then(function(response){
            hiddenWord.wordChecker(response.guess)
            //hiddenWord.printString()
            currentWord = hiddenWord.printString()
            consoleHangman.userGuess()
            consoleHangman.remGuesses--
            console.log(`\nYou have ${consoleHangman.remGuesses} remaining\n`)
        }).catch(function(error){
            console.log(error)
        })
    },
    createWord: (word) => {
        hiddenWord = new Word(datWord)
        hiddenWord.createArray()
    }
}


consoleHangman.startGame()

