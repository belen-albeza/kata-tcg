import { describe, it, expect, mock } from "bun:test";
import Deck, { standardDeck } from ".";

describe("Deck", () => {
  it("is created with the provided cards", () => {
    const cards = [{ mana: 0 }];
    const d = new Deck([...cards]);

    expect(d.cards).toEqual(cards);
  });

  it("has a length", () => {
    const cards = [{ mana: 0 }];
    const d = new Deck([...cards]);

    expect(d.length).toBe(1);
  });

  describe("Draw", () => {
    it("draws the card at the top of the stack", () => {
      const cards = [{ mana: 0 }, { mana: 1 }];
      const d = new Deck([...cards]);

      expect(d.length).toBe(2);
      expect(d.draw()).toEqual({ mana: 1 });
      expect(d.length).toBe(1);
    });

    it("does not return a card if it's empty", () => {
      const d = new Deck([]);
      expect(d.draw()).toEqual(undefined);
    });
  });

  it("shuffles the deck using the Knuth shuffle", () => {
    // this mock will reverse the array
    const random = mock(() => 0);
    random.mockImplementation(() => random.mock.calls.length - 1);
    const deck = new Deck([{ mana: 0 }, { mana: 1 }, { mana: 2 }], random);

    deck.shuffle();

    expect(deck.cards.map((x) => x.mana)).toEqual([2, 1, 0]);
  });
});

describe("standardDeck", () => {
  it("has 20 cards of different mana cost", () => {
    const deck = standardDeck();
    expect(deck.cards.map((x) => x.mana)).toEqual([
      0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8,
    ]);
  });
});
