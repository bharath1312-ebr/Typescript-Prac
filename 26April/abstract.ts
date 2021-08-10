
  interface Panel{
      currentState : boolean;
      currentTemp : number;
      mintemp : number ;
      maxtemp : number;
      turnOnOff();
      inctemp();
      dectemp();
      swingMode();
  }

  class MotherBoard implements Panel{
    currentTemp = 16;
    mintemp = 16;
    maxtemp = 32;
    currentState = false;
    turnOnOff(){
        if(this.currentState == false){
                this.currentState = true;
                console.log("AC ON")
        }
        else{
            this.currentState = false;
            console.log('AC OFF')
        }

    }
    inctemp(){
        if(this.currentState == true) {
            if(this.currentTemp >= this.mintemp && this.currentTemp < this.maxtemp){
                this.currentTemp++;
                console.log("Current Temp",this.currentTemp)
            }
        }
        else{
            console.log("Turn On AC First ")
        }

    }
    dectemp(){
        if(this.currentState == true) {
            if(this.currentTemp > this.mintemp && this.currentTemp < this.maxtemp){
                this.currentTemp--;
                console.log("Current Temp",this.currentTemp)
            }
        }
        else{
            console.log("Turn On AC First ")
        }
    }
    swingMode(){

    }
  }

var panel:Panel = new MotherBoard();
panel.turnOnOff();
console.log(panel.currentTemp);
panel.inctemp();
panel.inctemp();
panel.inctemp();
panel.inctemp();
panel.dectemp();