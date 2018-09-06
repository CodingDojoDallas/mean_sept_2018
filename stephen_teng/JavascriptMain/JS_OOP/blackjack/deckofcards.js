class Card{
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
    
    get value() {
         const valueObject = {
            1: "Ace",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Jack",
            12: "Queen",
            13: "King"
        }
        return valueObject[this.number];
    }
    show(){
        console.log(`Value: ${this.value}, Suit: ${this.suit}`);
        return this;
    }
    
}

class Deck{
    constructor() {
        this.reset();
    }
    
    show(){
        for(let i in this.deck){
           this.deck[i].show();
        }
        return this;
    }

    shuffle() {
        var m = this.deck.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this.deck[m];
          this.deck[m] = this.deck[i];
          this.deck[i] = t;
        }
      
        return this;
      }

    reset() {
        this.deck = [];
        const suitDictionary = {
            0: "Clubs",
            1: "Diamonds",
            2: "Hearts",
            3: "Spades"
        }
        for(let suitCreated = 0; suitCreated < 4; suitCreated++){
            for(let cardNumber = 1; cardNumber <= 13; cardNumber++){
                this.deck.push(new Card(cardNumber, suitDictionary[suitCreated]));
            }
        }
        return this;
    }

    deal() {
        let cardDealt = this.deck[this.deck.length-1];
        this.deck.pop();
        return cardDealt;
    }
    
}

class Player{
    constructor(name) {
        this.name = name
        this.hand = [];
    }
    takeCard(deck){
        this.hand.push(deck.deal());
        return this;
    }

    displayHand(){
        console.log("Cards in Hand:")
        for(let i in this.hand){
            this.hand[i].show();
        }
        return this;
    }

    shufflehand() {
        var m = this.hand.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this.hand[m];
          this.hand[m] = this.hand[i];
          this.hand[i] = t;
        }
      
        return this;
    }

    removeCard(deck){
        this.shufflehand();
        console.log("Card Removed:")
        this.hand[this.hand.length-1].show();
        this.hand.pop();
        return this;
    }
}

// var newDeck = new Deck;
// // newDeck.show();
// newDeck.shuffle();

// const player1 = new Player("Robert");
// player1.takeCard(newDeck);
// player1.takeCard(newDeck);
// player1.takeCard(newDeck);
// player1.takeCard(newDeck);
// player1.takeCard(newDeck);
// player1.displayHand();
// player1.removeCard(newDeck);
// player1.displayHand();
