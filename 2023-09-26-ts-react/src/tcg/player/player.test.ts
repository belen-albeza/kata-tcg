import { describe, it, expect } from "bun:test";
import Player, { Card } from ".";

describe("Player", () => {
  it("Starts by default with 30 health, 0 mana slots and an empty hand", () => {
    const p = new Player();
    expect(p.health).toBe(30);
    expect(p.manaSlots).toBe(0);
    expect(p.hand).toEqual([]);
  });

  it("Starts with the provided deck", () => {
    const deck = [{ mana: 0 }, { mana: 1 }, { mana: 1 }];
    const p = new Player(deck);

    expect(p.deck.length).toBe(deck.length);
    expect([...p.deck].sort((a: Card, b: Card) => a.mana - b.mana)).toEqual(
      deck
    );
  });
});
