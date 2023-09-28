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
  summary: PlayerSummary;
}

interface PlayerSummary {
  readonly hand: PlayerCard[];
  readonly health: number;
  readonly manaSlots: number;
}

interface GameSummary {
  readonly currentPlayer: number;
  readonly round: number;
  readonly players: [PlayerSummary, PlayerSummary];
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

  get summary(): GameSummary {
    return {
      currentPlayer: 0,
      round: 0,
      players: [this.players[0].summary, this.players[1].summary],
    };
  }
}
