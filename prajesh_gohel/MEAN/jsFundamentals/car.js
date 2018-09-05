function Car(damage, maxSpeed) {
  this.damage = damage;
  this.maxSpeed = maxSpeed;
  this.bump = function(car) {
    if (car != this) {
      car.damage += 5 * this.maxSpeed;
      this.damage += 5 * car.maxSpeed;
      console.log("Our car: "+this.damage);
      console.log("Target car: "+car.damage);
      return this;
    }
  }
}

var mercedes = new Car(0, 100);
var chevy = new Car(0, 50);
console.log(mercedes.maxSpeed);
chevy.bump(mercedes);
mercedes.bump(mercedes);

// class Car {
//   constructor(damage, maxSpeed) {
//     this.damage = damage;
//     this.maxSpeed = maxSpeed;
//   }
// }
