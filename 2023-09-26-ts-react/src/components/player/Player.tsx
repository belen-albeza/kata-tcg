import range from "lodash.range";

import Card from "../card";
import styles from "./Player.module.css";

interface Card {
  mana: number;
  id: string;
}

interface PlayerState {
  health: number;
  manaSlots: number;
  hand: Card[];
}

interface Props {
  name: string;
  state: PlayerState;
  className?: string;
  shallHideCards?: boolean;
}

const Player = ({
  name,
  state,
  className = "",
  shallHideCards = false,
}: Props) => {
  const { health, manaSlots, hand } = state;

  return (
    <section className={className}>
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <p>
        Mana:{" "}
        {range(10)
          .map((x) => (x < manaSlots ? "🔵" : "⚪️"))
          .join(" ")}
      </p>
      <ul className={styles.cardList}>
        {hand.map((x) => (
          <li key={x.id}>
            <Card mana={x.mana} face={shallHideCards ? "back" : "front"} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Player;
