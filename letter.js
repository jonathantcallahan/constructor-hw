function Letter(letter){
    this.chosenLetter = letter;
    this.beenGuessed = false;
    this.returnLetter = () => {
        if(this.beenGuessed){
            return this.chosenLetter;
        } else {
            return '_';
        }
    }
    this.letterChecker = (guess) => {
        if(guess === this.chosenLetter){
            this.beenGuessed = true;
        } else {
            this.beenGuessed = false;
        }
    }
}   


var a = new Letter('a');

module.exports = {
    Letter: Letter,
}

