import { standardDeck } from "./deck";
import Player from "./player";
import Game from "./game";

export const startGame = () => {
  const player1 = new Player(standardDeck());
  const player2 = new Player(standardDeck());

  const game = new Game([player1, player2] as [Player, Player]);

  game.setup();

  return game;
};
