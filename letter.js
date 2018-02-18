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
            this.beenGuessed = false;
        } else {
            this.beenGuessed = true;
        }
    }
}   


var a = new Letter(a);

a.letterChecker('b')
console.log(a.returnLetter())
a.letterChecker('a')
console.log(a.returnLetter())