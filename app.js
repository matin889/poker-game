class Card {
  suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  names = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];
  constructor() {
    this.suits;
    this.names;
    this.values;
  }
}

const card = new Card();

class Deck {
  deck = [];
  discardPile = [];

  constructor() {
    for (let i = 0; i < card.suits.length; i++) {
      for (let j = 0; j < card.names.length; j++) {
        const cardDeck = {
          Suit: card.suits[i],
          Name: card.names[j],
          Value: card.values[j],
        };
        this.deck.push(cardDeck);
      }
    }
  }
  shuffleDeck() {
    for (let x = this.deck.length - 1; x > 0; x--) {
      let y = Math.floor(Math.random() * x);
      let deckCard = { ...this.deck[x] };
      this.deck[x] = { ...this.deck[y] };
      this.deck[y] = { ...deckCard };
    }
  }
  dealCards(count) {
    return this.deck.splice(0, count);
  }

  discard(cards) {
    for (let i = 0; i < cards.length; i++) {
      this.discardPile.push(cards[i]);
    }
  }
  reset() {
    let discardedCards = this.discardPile.splice(0, this.discardPile.length);
    for (let i = 0; i < discardedCards.length; i++) {
      this.deck.push(discardedCards[i]);
    }
  }
}

class Player {
  name;
  cards;
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      this.cards.push(cards[i]);
    }
  }
  remove(count) {
    return this.cards.splice(0, count);
  }
}

class Main {
  deck;
  player1;
  player2;
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player("Slim", this.deck);
    this.player2 = new Player("Luke", this.deck);
    this.deck.shuffleDeck();
    console.log(this.deck);
    this.player1.addCards(this.deck.dealCards(5));
    console.log(this.player1);
    this.deck.shuffleDeck();
    console.log(this.deck);
    this.player2.addCards(this.deck.dealCards(5));
    console.log(this.player2);
    console.log(this.deck);
    this.deck.discard(this.player1.remove(2));
    console.log(this.player1);
    this.deck.discard(this.player2.remove(2));
    console.log(this.player2);

    this.deck.shuffleDeck();
    console.log(this.deck);
    this.player1.addCards(this.deck.dealCards(2));
    console.log(this.player1);
    this.deck.shuffleDeck();
    console.log(this.deck);
    this.player2.addCards(this.deck.dealCards(2));
    console.log(this.player2);
    this.deck.shuffleDeck();
    console.log(this.deck);

    this.deck.discard(this.player1.remove(5));
    console.log(this.player1);
    this.deck.discard(this.player2.remove(5));
    console.log(this.player2);

    console.log(this.deck);

    this.deck.reset();

    console.log(this.deck);
  }
}
const main = new Main();
