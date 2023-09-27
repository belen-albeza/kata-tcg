import { describe, it, expect, spyOn } from "bun:test";

import { standardDeck } from "./deck";
import Player from "./player";
import Game from "./game";

describe("TCG", () => {
  it("can create a game by giving two players the standard deck", () => {
    const g = new Game([
      new Player(standardDeck()),
      new Player(standardDeck()),
    ]);

    expect(g.players[0].deck).toHaveLength(20);
  });

  it("shuffles both decks randomly on setup", () => {
    const random = spyOn(Math, "random");
    const g = new Game([
      new Player(standardDeck()),
      new Player(standardDeck()),
    ]);

    g.setup();

    expect(random).toHaveBeenCalled();
  });
});
