export interface Card {
  mana: number;
}

export interface CardDeck {
  draw: () => Card | undefined;
  shuffle: () => void;
}

export class Player {
  health: number;
  manaSlots: number;
  deck: CardDeck;
  hand: Card[];

  constructor(deck: CardDeck, health = 30, manaSlots = 0, hand = []) {
    this.health = health;
    this.manaSlots = manaSlots;
    this.deck = deck;
    this.hand = hand;
  }

  draw(): Card | undefined {
    const card = this.deck.draw();
    if (card) {
      this.hand.push(card);
    }

    return card;
  }
}
