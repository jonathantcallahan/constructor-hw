const letter = require('./letter')

function Word(word){
    this.word = word;
    this.wordHolder = [];
    this.stringHolder = [];
    this.createArray = () => {
        for(var i = 0; i<this.word.length; i++){
            this.wordHolder.push(new letter.Letter(this.word[i]))
            //console.log(this.word[i])
        } 
        return this.wordHolder;
    }
    this.printString = () => {
        this.stringHolder = [];
        for(var i = 0; i<this.wordHolder.length; i++){
            //return letter checks to see if a letter has
            //been guessed or not. If the letter has been
            //guessed it return the value of the letter,
            //if it has not it returns an underscore. Am 
            //having trouble getting the underscore to 
            //display
            // console.log(this.wordHolder[i].returnLetter())
            this.stringHolder.push(this.wordHolder[i].returnLetter())
        }
        console.log(this.stringHolder.toString().replace(/,/g,''))
        return this.stringHolder.toString().replace(/,/g,'')
    }
    this.wordChecker = (letter) => {
        var correctGuess = false;
        for(var i = 0; i<this.wordHolder.length; i++){
            this.wordHolder[i].letterChecker(letter)
            if(this.wordHolder[i].letterChecker(letter)){
                correctGuess = true;
            }
            //var correctGuess = this.wordHolder[i].letterChecker(letter)
            //was setting incorrect guess if the letter wasn't
            //the las letter in the string
        }
        if(!correctGuess){
            console.log('Incorrect Guess!')
        }

        
    }
}

module.exports = Word

