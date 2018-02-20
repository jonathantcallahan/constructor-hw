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
        } // else {
        //     this.beenGuessed = false;
        // }
        //the letter checker method was setting already
        //guessed answers to false so i configured it to
        //only set the value for the beenGuessed key
        //if the guess was equal to the letter
    }
}   

module.exports = {
    Letter: Letter,
}

