//1. What are classes & jobect constructors used for??
    // Object constructors are javascript's version of objects/classes.
    // 	They are used to store information about a group of things with multiple values

//2. What does "this" referring to in a class.
    // points to attributes and methods within the class

//3. Write a class(ES5 OR ES6) for a Car:
    //2 attribultes done to the car & max.speed
    //Add a mothon so one car can bump into another which will increase the damage done to each car.
    //create 2 car objects @ have them bump into one another
    

    class Car{
        constructor(damage, max_speed) {
            this.damage = damage;
            this.max_speed = max_speed;
        }

        bump(othercar){
            othercar.damage += 100;
            this.damage += 100;
            return this;
        }

    }


    newCar = new Car(0, 200);
    newCar2 = new Car(2, 150);

    // Guess the output of the following code, then run it
    function Foo(){
        const privateMethod = function(){
            console.log('private', this);
        }
        this.greet = function(){
            console.log("greet", this);
            privateMethod();
        }
    }

    const some_obj = new Foo();
    some_obj.greet();