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
}

var ballsArray = ['b','a','l','l','s']

var balls = new Word(ballsArray)

console.log(b)

console.log(balls)

console.log(balls.createArray())

