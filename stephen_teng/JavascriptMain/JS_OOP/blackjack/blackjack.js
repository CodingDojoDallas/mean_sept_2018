var gameDeck = new Deck;
const player1 = new Player;

$(document).on('click', '.deal', function(){
    $("#player1cards").html('');
    gameDeck.shuffle();
    player1.hand=[];
    player1.takeCard(gameDeck);
    player1.takeCard(gameDeck);
    let handdealt =  player1.hand;
    $("#deal").addClass("disabled");
    $("#deal").removeClass("deal");
    $("#hit").addClass("hit");
    $("#hit").removeClass("disabled");
    displayCards(handdealt);
    calculateScore(handdealt);
});

$(document).on('click', '#shuffle', function(){
    player1.hand=[];
    $("#player1cards").html("");
    gameDeck.reset();
    gameDeck.shuffle();
    $("#deal").addClass("deal");
    $("#deal").removeClass("disabled");
    $("#scorebox").removeClass("overlimit");
    $("#scorebox").removeClass("perfectscore");
    $("#hit").addClass("disabled");
    $("#hit").removeClass("hit");
    calculateScore(player1.hand);
});

//Hit Function
$(document).on('click', '.hit', function(){
    $("#player1cards").html("")
    player1.takeCard(gameDeck);
    displayCards(player1.hand);
    calculateScore(player1.hand);
    console.log("hit");
});

function displayCards(handdealt){
    const suitDictionary = {"Clubs": "c", "Diamonds": "d", "Hearts": "h", "Spades": "s"};
    const valueDictionary = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: "j", 12: "q", 13: "k"}
    for(var i = 0, l = handdealt.length; i < l; i++){
        $("#player1cards").append(`<img src=cards-png/${suitDictionary[handdealt[i]["suit"]]+ valueDictionary[handdealt[i]["number"]]}.png alt='${handdealt[i].value + " of "  + handdealt[i]["suit"]}'>`)
    }
}

function calculateScore(handdealt){
    const valueDictionary = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 10, 12: 10, 13: 10};
    let score = 0;
    let acepresent = false;
    for(var i = 0, l = handdealt.length; i < l; i++){
        score += valueDictionary[handdealt[i]["number"]];
        if (valueDictionary[handdealt[i]["number"]] == 1){
            acepresent = true;
        }
    }
    if(acepresent && score <= 11){
        score +=10;
    }
    $("#scorebox").html(`<h3>Score: ${score}</h3>`)
    if(score == 21){
        $("#hit").addClass("disabled");
        $("#hit").removeClass("hit");
        $("#scorebox").addClass("perfectscore");
    }
    if(score > 21){
        $("#hit").addClass("disabled");
        $("#hit").removeClass("hit");
        $("#scorebox").addClass("overlimit");
    }
    return this;
}
/* <img src="cards-png/s1.png"> */