class Bike {
  price: number;
  maxSpeed: string;
  miles: number;
  constructor (price: number, maxSpeed: string) {
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.miles = 0;
  }
  displayInfo() {
    console.log(`Price: ${this.price}\nSpeed: ${this.maxSpeed}\nMiles: ${this.miles}`)
    return this;
  }
  ride() {
    console.log(`Riding...`);
    this.miles += 10;
    return this;
  }
  reverse() {
    if (this.miles == 0) {
      console.log(`Cannot reverse!`);
      return this;
    }
    console.log(`Reversing...`);
    this.miles -= 5
    return this;
  }
}

let speedy = new Bike(1000, "500 mph");
let motor = new Bike(250, "50 mph");
let plasma = new Bike(50000, "600 mps");
console.log(speedy.ride().ride().ride().reverse().displayInfo());
console.log(motor.ride().ride().reverse().reverse().displayInfo());
console.log(plasma.reverse().reverse().reverse().displayInfo());
