interface DeckCard {
  mana: number;
}

export class Deck {
  readonly #cards: DeckCard[];
  readonly #randomFn: (x: number) => number;

  constructor(
    cards: DeckCard[],
    randomFn: ((x: number) => number) | undefined = undefined
  ) {
    this.#cards = cards;
    this.#randomFn =
      randomFn ?? ((x: number) => Math.floor(Math.random() * (x + 1)));
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

  shuffle() {
    // Knuth shuffling: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    for (let i = this.#cards.length - 1; i > 0; i--) {
      const j = this.#randomFn(i);
      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
    }
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
