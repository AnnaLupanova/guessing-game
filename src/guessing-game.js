class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.rigth = max;
        this.left = min;
    }


    guess() {
        let middle = Math.ceil((this.rigth +  this.left)/2);
        this.middle = middle;
        return this.middle ;
    }

    lower() {
        this.rigth = this.middle ;


    }

    greater() {
        this.left = this.middle ;
    }
}
module.exports = GuessingGame;
