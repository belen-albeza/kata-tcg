import range from "lodash.range";
import { Circle } from "react-feather";

import styles from "./ManaSlots.module.css";

interface Props {
  slots: number;
  mana: number;
  className?: string;
}

const iconClass = (i: number, mana: number, slots: number) => {
  if (i < mana) {
    return styles.iconMana;
  } else if (i < slots) {
    return styles.iconSlot;
  }

  return styles.iconEmpty;
};

const ManaSlots = ({ slots, mana, className = "" }: Props) => {
  return (
    <p className={`${styles.container} ${className}`}>
      {mana} / {slots}
      <span className={styles.slots}>
        {range(10).map((x) => (
          <Circle className={`${styles.icon} ${iconClass(x, mana, slots)}`} />
        ))}
      </span>
    </p>
  );
};

export default ManaSlots;
