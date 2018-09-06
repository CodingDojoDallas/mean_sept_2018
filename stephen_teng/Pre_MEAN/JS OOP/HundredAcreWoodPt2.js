
//*************************************************Locations *****************/
//Characters are placed in reading order left to right, top to bottom
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };
var kanga = { character: "Kanga" };
var owl = { character: "Owl" };
var christopherrobin = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var piglet = { character: "Piglet"};        
var pooh = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var tigger = { character: "Tigger" };

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
    location: tigger
}
function move(direction){
    if (direction == "north"){
        if (player.location.north != undefined){
            player.location = player.location.north;
            console.log(`You are now at ${player.location.character}'s house`);
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