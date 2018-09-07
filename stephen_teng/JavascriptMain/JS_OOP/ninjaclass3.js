class Ninja{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    //sayName() - This should log that Ninja's name to the console.
    sayName() {
        console.log("My ninja name is " + this.name + "!");
    }

    //showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    // drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health += 10;
    }
    //take another Ninja instance and subtract 5 Health from the Ninja we passed in
    punch(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 5;
        }
        else{
            console.log("Target a ninja")
        }
    }
    //Kick will subtract 15 Health for each point of Strength the calling Ninja has
    kick(opponent){
        if (opponent instanceof Ninja){
            opponent.health -= 15;
        }
        else{
            console.log("Target a ninja")
        }
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }

    speakWisdom(){
        console.log("Know yourself!")
        super.drinkSake();
    }

}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
blueNinja.sayName();
redNinja.sayName();
redNinja.drinkSake();
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.punch("Cow");

blueNinja.showStats();
redNinja.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();