import { describe, it, expect, mock } from "bun:test";
import Player, { Card } from ".";

const anyDeck = () => anyEmptyDeck();

const anyEmptyDeck = () => ({
  draw: mock(() => undefined as Card | undefined),
  shuffle: mock(() => {}),
});

describe("Player", () => {
  it("Starts by default with 30 health, 0 mana slots and an empty hand", () => {
    const p = new Player(anyDeck());
    expect(p.health).toBe(30);
    expect(p.manaSlots).toBe(0);
    expect(p.hand).toEqual([]);
  });

  it("Starts with the provided deck", () => {
    const deck = anyDeck();
    const p = new Player(deck);

    expect(p.deck).toEqual(deck);
  });

  describe("Card draw", () => {
    it("draws a card and adds it to their hand", () => {
      const deck = anyDeck();
      deck.draw.mockReturnValueOnce({ mana: 1 });
      const p = new Player(deck);

      p.draw();

      expect(p.hand).toEqual([{ mana: 1 }]);
      expect(deck.draw).toHaveBeenCalled();
    });

    it("doesn't add a card to the hand if the deck is empty", () => {
      const deck = anyEmptyDeck();
      const p = new Player(deck);

      p.draw();
      expect(p.hand).toEqual([]);
    });
  });
});
