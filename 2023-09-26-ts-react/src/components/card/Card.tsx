import { Circle, Moon } from "react-feather";
import styles from "./Card.module.css";

interface Props {
  mana: number;
  face?: "front" | "back";
}

const ManaCost = ({ mana }: { mana: number }) => {
  return (
    <span className={styles.mana}>
      {mana} <Circle className={styles.manaIcon} fill="#4965d5" />
    </span>
  );
};

const Card = ({ mana, face = "front" }: Props) => {
  return (
    <article className={styles.card}>
      {face === "front" ? (
        <section className={styles.face}>
          <ManaCost mana={mana} />
        </section>
      ) : (
        <section className={styles.face}>
          <Moon size="2rem" className={styles.backLogo} />
        </section>
      )}
    </article>
  );
};

export default Card;
