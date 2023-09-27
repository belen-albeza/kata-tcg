interface PlayerCard {
  mana: number;
}

interface PlayerDeck {
  shuffle: () => void;
  draw: () => PlayerCard | undefined;
}

export interface GamePlayer {
  deck: PlayerDeck;
  draw: () => PlayerCard | undefined;
  health: number;
  manaSlots: number;
  hand: PlayerCard[];
}

export class Game {
  static readonly #STARTING_CARD_COUNT: number = 3;

  readonly players: [GamePlayer, GamePlayer];

  constructor(players: [GamePlayer, GamePlayer]) {
    this.players = players;
  }

  setup() {
    for (const p of this.players) {
      p.deck.shuffle();
      for (let i = 0; i < Game.#STARTING_CARD_COUNT; i++) {
        p.draw();
      }
    }
  }
}
