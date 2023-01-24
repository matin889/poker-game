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
  getValueOfCards() {
    this.cards.reduce((accumalator, card) => {
      return accumalator + parseInt(card.Value);
    }, 0);
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

    // shuffle deck with 52 cards
    this.deck.shuffleDeck();
    console.log(this.deck);

    //Slim will get 5 cards
    this.player1.addCards(this.deck.dealCards(5));
    console.log(this.player1);

    // Slim's cards value
    let cardsValue = this.player1.cards.reduce((accumalator, card) => {
      return accumalator + parseInt(card.Value);
    }, 0);
    console.log(`${this.player1.name}'s Card value is ${cardsValue}`);
    // this.deck.shuffleDeck();
    // console.log(this.deck);

    //Luke will get 5 cards
    this.player2.addCards(this.deck.dealCards(5));
    console.log(this.player2);

    // Luke's cards value
    let cardsValues = this.player2.cards.reduce((accumalator, card) => {
      return accumalator + parseInt(card.Value);
    }, 0);
    console.log(`${this.player2.name}'s Card value is ${cardsValues}`);
    // Deck is having 42 cards now
    console.log(this.deck);

    //Slim discard 2 cards to the discard pile
    this.deck.discard(this.player1.remove(2));
    console.log(this.player1);

    //Luke discard 2 cards to the discard pile
    this.deck.discard(this.player2.remove(2));
    console.log(this.player2);

    // this.deck.shuffleDeck();
    // console.log(this.deck);
    //Slim will take 2 cards
    this.player1.addCards(this.deck.dealCards(2));
    console.log(this.player1);

    // Slim's cards value
    // this.deck.shuffleDeck();
    // console.log(this.deck);
    //Luke will take 2 cards
    this.player2.addCards(this.deck.dealCards(2));
    console.log(this.player2);

    // Luke's cards value

    //Deck is having 38 cards and discard pile is having 4 cards now
    this.deck.shuffleDeck();
    console.log(this.deck);

    //Slim and Luke discard 5 cards to the discard pile
    // this.deck.discard(this.player1.remove(5));
    // console.log(this.player1);

    // this.deck.discard(this.player2.remove(5));
    // console.log(this.player2);

    //Deck is having 38 cards and discard pile is having 14 cards now
    console.log(this.deck);

    //Deck will have 52 caeds and discard pile is empty
    this.deck.reset();
    console.log(this.deck);
  }
}
const main = new Main();
