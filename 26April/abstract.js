var MotherBoard = /** @class */ (function () {
    function MotherBoard() {
        this.currentTemp = 16;
        this.mintemp = 16;
        this.maxtemp = 32;
        this.currentState = false;
    }
    MotherBoard.prototype.turnOnOff = function () {
        if (this.currentState == false) {
            this.currentState = true;
            console.log("AC ON");
        }
        else {
            this.currentState = false;
            console.log('AC OFF');
        }
    };
    MotherBoard.prototype.inctemp = function () {
        if (this.currentState == true) {
            if (this.currentTemp >= this.mintemp && this.currentTemp < this.maxtemp) {
                this.currentTemp++;
                console.log("Current Temp", this.currentTemp);
            }
        }
        else {
            console.log("Turn On AC First ");
        }
    };
    MotherBoard.prototype.dectemp = function () {
        if (this.currentState == true) {
            if (this.currentTemp > this.mintemp && this.currentTemp < this.maxtemp) {
                this.currentTemp--;
                console.log("Current Temp", this.currentTemp);
            }
        }
        else {
            console.log("Turn On AC First ");
        }
    };
    MotherBoard.prototype.swingMode = function () {
    };
    return MotherBoard;
}());
var panel = new MotherBoard();
panel.turnOnOff();
console.log(panel.currentTemp);
panel.inctemp();
panel.inctemp();
panel.inctemp();
panel.inctemp();
panel.dectemp();
