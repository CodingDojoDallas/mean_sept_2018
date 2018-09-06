
function Ninja(name, age) {
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
    //take another Ninja instance and subtract 5 Health from the Ninja we passed in
    this.punch = function(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 5;
        }
        else{
            console.log("Target a ninja")
        }
    }
    //Kick will subtract 15 Health for each point of Strength the calling Ninja has
    this.kick = function(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 15;
        }
        else{
            console.log("Target a ninja")
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.punch("Cow");

blueNinja.showStats();
redNinja.showStats();