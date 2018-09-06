
//*************************************************Locations *****************/
//Characters are placed in reading order left to right, top to bottom
var eeyore = {
        character: "Eeyore",
        greet:function(){
            console.log("I'd say thistles, but nobody listens to me, anyway.");
            }
    };

var heffalumps = {
        character: "Heffalumps",
        greet:function(){
            console.log("Ha ha ha ha!");
            }
    };

var kanga = {
        character: "Kanga",
        greet:function(){
            console.log("Why, hello, dear.");
            }
    };

var owl = {
        character: "Owl",
        greet:function(){
            console.log("Welcome!");
            }
    };

var christopherrobin = {
        character: "Christopher Robin",
        greet:function(){
            console.log("Silly ol' user!");
            }
    };

var rabbit = {
        character: "Rabbit",
        greet:function(){
            console.log("Hallo");
            }
    };

var gopher = {
        character: "Gopher",
        greet:function(){
            console.log("Gopher!");
            }
    };

var piglet = { 
        character: "Piglet",
        greet:function(){
            console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
            }
    };
        

var pooh = { 
        character: "Winnie the Pooh",
        greet:function(){
            console.log("Oh bother");
            } 
    };
var bees = { 
        character: "Bees",
        greet:function(){
            console.log("Bizzz");
            }
    };
var tigger = { 
        character: "Tigger",
        greet: function(){
            console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
            }
};

// eeyore

eeyore.south = kanga;
eeyore.east = heffalumps;

// heffalumps
heffalumps.west = eeyore;

// kanga 
kanga.north = eeyore;
kanga.south = christopherrobin;

// owl 
owl.south= piglet;
owl.east = christopherrobin;

// christopherrobin 
christopherrobin.north = kanga; 
christopherrobin.south =  pooh;
christopherrobin.east =  rabbit;
christopherrobin.west =  owl;

// rabbit 
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = christopherrobin;

// gopher
gopher.west = rabbit;

// piglet 
piglet.north = owl;
piglet.east = pooh;

// pooh
pooh.north = christopherrobin; 
pooh.south =  tigger;
pooh.east =  bees;
pooh.west =  piglet;

// bees
bees.north = rabbit;
bees.west = pooh;

// tigger
tigger.north = pooh;

//*****************************Movement**********************************/
var player = {
    location: tigger,
    hashoney: false
}
function move(direction){
    if (direction == "north"){
        if (player.location.north != undefined){
            player.location = player.location.north;
            console.log(`You are now at ${player.location.character}'s house`);
            player.location.greet();
            return;
        }
        else{
            console.log("You may not go that way!")
            return;
        }
    }
    else if(direction == "south"){
        if (player.location.south != undefined){
            player.location = player.location.south;
            console.log(`You are now at ${player.location.character}'s house`);
            player.location.greet();
            return;
        }
        else{
            console.log("You may not go that way!")
            return;
        }
    }
    else if(direction == "east"){
        if (player.location.east != undefined){
            player.location = player.location.east;
            console.log(`You are now at ${player.location.character}'s house`);
            player.location.greet();
            return;
        }
        else{
            console.log("You may not go that way!");
            return;
        }
    }
    else if(direction == "west"){
        if (player.location.west != undefined){
            player.location = player.location.west;
            console.log(`You are now at ${player.location.character}'s house`);
            player.location.greet();
            return;
        }
        else{
            console.log("You may not go that way!");
            return;
        }
    }
    else{
        console.log("Invalid direction");
        return;
    }
    
}



//*****************************Game Functions**********************************/
function mission(){
    var locations = [eeyore, heffalumps, kanga, owl, christopherrobin, rabbit, gopher, piglet, pooh, tigger];
    randomLocation = locations[Math.floor(Math.random() * 10)];
    console.log(`${randomLocation.character} is looking for honey! Can you help?`)
    console.log(`You are now at ${player.location.character}'s house`);
    player.location.greet();
    return randomLocation;
}

function pickUp(){
    if(player.location == bees){
        player.hashoney = true;
        console.log("You've gathered some honey!");
    }
    else{
        console.log("You can't find honey here.");

    }
}

function drop(){
    if(player.hashoney = false){
        console.log("You don't have any honey yet.");
    }
    if(player.location != destination){
        console.log("Whoops! This isn't the place that needs honey!");
    }
    else{
        (player.hashoney = false);
        console.log(`Congratulations!  You delivered the honey to ${destination.character}!`);
    }
    
}

var destination = mission();