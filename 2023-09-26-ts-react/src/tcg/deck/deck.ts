interface DeckCard {
  mana: number;
}

export class Deck {
  readonly #cards: DeckCard[];

  constructor(cards: DeckCard[]) {
    this.#cards = cards;
  }

  get length(): number {
    return this.#cards.length;
  }

  get cards(): DeckCard[] {
    return [...this.#cards];
  }

  draw(): DeckCard | undefined {
    return this.#cards.pop();
  }
}

export const standardDeck = () => {
  return new Deck([
    { mana: 0 },
    { mana: 0 },
    { mana: 1 },
    { mana: 1 },
    { mana: 2 },
    { mana: 2 },
    { mana: 2 },
    { mana: 3 },
    { mana: 3 },
    { mana: 3 },
    { mana: 3 },
    { mana: 4 },
    { mana: 4 },
    { mana: 4 },
    { mana: 5 },
    { mana: 5 },
    { mana: 6 },
    { mana: 6 },
    { mana: 7 },
    { mana: 8 },
  ]);
};
