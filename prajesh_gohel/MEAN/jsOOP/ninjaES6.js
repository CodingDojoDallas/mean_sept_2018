class Ninja {
  constructor(name, health = 100, strength = 3, speed = 3) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.initHealth = health
  }
  sayName() {
    console.log(`My name is ${this.name}.\n`);
    return this;
  }
  showStats() {
    console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}\n`);
    return this;
  }
  drinkSake() {
    console.log(`${this.name} is drinking sake...`);
    if (this.health <= this.initHealth && this.health > this.initHealth - 10) {
      console.log(`No changes.\n`);
    }
    else if (this.health <= this.initHealth - 10) {
      this.health += 10;
      console.log(`Health increased to ${this.health}!\n`);
    }
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(`One man's trash is another man's treasure.\n`);
  }
}

const pj = new Ninja("Prajesh")
pj.sayName().showStats().drinkSake()

const josh = new Sensei("Master Josh")
josh.showStats().speakWisdom()
