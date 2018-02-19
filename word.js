const letter = require('./letter')

var b = new letter.Letter('b')

function Word(word){
    this.word = word;
    this.wordHolder = [];
    this.createArray = () => {
        for(var i = 0; i<this.word.length; i++){
            this.wordHolder.push(new letter.Letter(this.word[i]))
            console.log(this.word[i])
        } 
        return this.wordHolder;
    }
    this.printString = () => {
        for(var i = 0; i<this.wordHolder.length; i++){
            //return letter checks to see if a letter has
            //been guessed or not. If the letter has been
            //guessed it return the value of the letter,
            //if it has not it returns an underscore. Am 
            //having trouble getting the underscore to 
            //display
            console.log(this.wordHolder[i].returnLetter())
        }
    }
}

var ballsArray = ['b','a','l','l','s']

var balls = new Word(ballsArray)

// console.log(b)

// console.log(balls)

balls.createArray()

balls.printString()

