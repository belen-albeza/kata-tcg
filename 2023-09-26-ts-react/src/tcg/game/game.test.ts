import { describe, it, expect, mock } from "bun:test";
import Game, { GamePlayer } from ".";

const anyDeck = () => ({
  shuffle: mock(() => {}),
  draw: mock(() => undefined),
});

const anyPlayer = () => ({
  deck: anyDeck(),
  draw: mock(() => undefined),
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
});
