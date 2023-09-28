import Card from "../card";
import styles from "./Player.module.css";
import ManaSlots from "../mana-slots";

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
    <section className={`${className} ${styles.container}`}>
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <ManaSlots slots={manaSlots} mana={manaSlots} className={styles.slots} />
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
