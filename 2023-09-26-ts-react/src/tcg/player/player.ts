export interface Card {
  mana: number;
}

export interface CardDeck {
  draw: () => Card | undefined;
  shuffle: () => void;
}

interface Summary {
  manaSlots: number;
  health: number;
  hand: Card[];
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

  get summary(): Summary {
    const { health, hand, manaSlots } = this;

    return {
      health,
      manaSlots,
      hand,
    };
  }
}
