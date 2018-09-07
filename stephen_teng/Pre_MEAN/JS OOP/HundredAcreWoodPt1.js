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