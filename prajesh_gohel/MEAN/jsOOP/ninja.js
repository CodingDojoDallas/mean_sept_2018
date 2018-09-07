function Ninja(name, health = 100) {
  var self = this;
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = health;
  this.showStats = function() {
    console.log("Name: "+this.name+"\nStrength: "+strength+"\nSpeed: "+speed+"\nHealth: "+this.health+"\n");
    return this;
  }
  this.drinkSake = function() {
    console.log(this.name+": Drinking sake...");
    if (this.health <= health && this.health > health - 10) {
      console.log("No changes.\n");
    }
    else if (this.health <= health - 10) {
      this.health += 10;
      console.log("Health increased!\n");
    }
    return this;
  }
  this.punch = function(target) {
    if (self != target && target instanceof Ninja) {
      target.health -= 5;
      console.log(this.name+" punched "+target.name+"! Their health is now "+target.health+".\n");
      return this;
    }
  }
  this.kick = function(target) {
    if (self != target && target instanceof Ninja) {
      target.health -= 15 * strength;
      console.log(this.name+" kicked "+target.name+"! Their health is now "+target.health+".\n");
      return this;
    }
  }
}
Ninja.prototype.sayName = function () {
  console.log("My name is "+this.name+".\n");
  return this;
};

var kim = new Ninja("Kim", 120);
var jake = new Ninja("Jake");
kim.drinkSake();
jake.punch(kim).kick(kim);
kim.drinkSake().kick(jake).kick(jake).punch(jake);
jake.drinkSake().showStats()
kim.showStats()
