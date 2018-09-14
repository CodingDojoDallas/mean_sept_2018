class Card {
  constructor(suit, num, str) {
    this.suit = suit;
    this.num = num;
    this.str = str;
  }
  show() {
    console.log(`Suit: ${this.suit}\nNumerical Value: ${this.num}\nString Value: ${this.str}\n`);
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.cards = [];
    this.setUp();
  }
  setUp() {
    this.deck = [];
    const suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const str = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    for (var i = 0, j = 0; i < 52; i++, j++) {
      if (i % 13 == 0) {
        j = 0;
      }
      var card = new Card(suit[Math.floor(i/13)], num[j], str[j]);
      this.deck.push(card);
    }
  }
  shuffle() {
    let m = this.deck.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t
    }
    console.log(this.deck);
    console.log("\nDeck shuffled.\n");
    return this;
  }
  reset() {
    this.setUp();
    console.log(this.deck);
    console.log("\nDeck reset.\n");
    return this;
  }
  deal() {
    this.cards = this.deck.splice((Math.floor(Math.random() * 52)), 1)
    // this.cards.push(dealtCard);
    console.log(this.cards);
    console.log("Number of cards left: "+this.deck.length+".\n");
    return this;
  }
}

class Player extends Deck {
  constructor(name) {
    super();
    this.name = name;
    this.shuffle();
    this.hand();
  }
  setUp() {
    const childSetUp = super.setUp();
  }
  shuffle() {
    const shuffledDeck = super.shuffle();
    return this;
  }
  hand() {
    for (var i = 0; i < 5; i++) {

    }
    this.cards = this.deck.splice(46, 5);
    // this.cards.push(dealtHand);
    console.log(this.cards);
    console.log("\n Hand dealt.\n");
    return this;
  }
  discard() {
    
  }
}

const heart = new Card("Hearts", 5, "Five")
heart.show()

const poker = new Deck
poker.shuffle().reset().shuffle().deal()

const mark = new Player("Mark")
