import { describe, it, expect, mock } from "bun:test";
import Game, { GamePlayer } from ".";

const anyDeck = () => ({
  shuffle: mock(() => {}),
  draw: mock(() => undefined),
});

const anyPlayer = () => ({
  deck: anyDeck(),
  draw: mock(() => undefined),
  summary: { health: 1, hand: [], manaSlots: 0 },
});

describe("Game", () => {
  it("sets up the game by shuffling the decks and giving each player 3 cards", () => {
    const players: [GamePlayer, GamePlayer] = [anyPlayer(), anyPlayer()];
    const g = new Game(players);

    g.setup();

    for (const player of g.players) {
      expect(player.deck.shuffle).toHaveBeenCalled();
      expect(player.draw).toHaveBeenCalledTimes(3);
    }
  });

  it("returns a summary with a snapshot of the game", () => {
    const players: [GamePlayer, GamePlayer] = [anyPlayer(), anyPlayer()];
    const g = new Game(players);

    const summary = g.summary;

    expect(summary.round).toBe(0); // TODO: map this to actual game value
    expect(summary.currentPlayer).toBe(0); // TODO: map this to actual game value
    expect(summary.players).toEqual([players[0].summary, players[1].summary]);
  });
});
