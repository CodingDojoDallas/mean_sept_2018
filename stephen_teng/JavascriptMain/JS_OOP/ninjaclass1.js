
function Ninja(name) {
    var self = this; 
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    //sayName() - This should log that Ninja's name to the console.
    this.sayName = function(){
        console.log("My ninja name is " + self.name + "!");
    }

    //showStats() - This should show the Ninja's name, strength, speed, and health.
    this.showStats = function(){
        console.log(`Name: ${self.name}, Health: ${self.health}, Speed: ${self.speed}, Strength: ${self.strength}`);
    }
    // drinkSake() - This should add +10 Health to the Ninja
    this.drinkSake = function(){
        this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();
ninja1.showStats();
// -> "Name: Hayabusa, Health: 110, Speed: 3, Strength: 3"
