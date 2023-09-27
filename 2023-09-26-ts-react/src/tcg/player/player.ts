export interface Card {
  mana: number;
}

export class Player {
  health: number;
  manaSlots: number;
  deck: Card[];
  hand: Card[];

  constructor(deck: Card[] = [], health = 30, manaSlots = 0, hand = []) {
    this.health = health;
    this.manaSlots = manaSlots;
    this.deck = deck;
    this.hand = hand;
  }
}
