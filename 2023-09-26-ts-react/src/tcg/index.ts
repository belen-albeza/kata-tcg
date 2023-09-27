import { standardDeck } from "./deck";
import Player from "./player";
import Game from "./game";

const player1 = new Player(standardDeck());
const player2 = new Player(standardDeck());

new Game([player1, player2] as [Player, Player]);
