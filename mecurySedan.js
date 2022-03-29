//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
           if((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;   
        }else{
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.")
        }
    }else{
        console.log(this.model + " " + this.make + " is full")
    }
    }
    start(){
        if(fuel > 0){
            console.log('Engine started')
          return this.started == true;
        }else{
            console.log('Engine cannot start')
            return this.started == false;
        }
    }
    checkService(mileage){
        if(this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService== true;
        }else{
            console.log('Car is fine')
        }
    }
}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)