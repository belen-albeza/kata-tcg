import { useMemo } from "react";
import { startGame } from "./tcg";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Player from "./components/player";
import styles from "./App.module.css";

function App() {
  const game = useMemo(() => startGame(), []);
  const { summary } = game;

  const players = summary.players.map((p) => ({
    ...p,
    manaSlots: 1,
    hand: p.hand.map((x) => ({
      id: crypto.randomUUID(),
      ...x,
    })),
  }));

  return (
    <>
      <header>
        <p>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </p>
        <h1>Card Battle</h1>
      </header>
      <main>
        <Player
          className={styles.player}
          name="Rival"
          state={players[1]}
          shallHideCards
        />
        <Player className={styles.player} name="You" state={players[0]} />
      </main>
      <footer>
        <p>
          Implementation of the{" "}
          <a href="https://codingdojo.org/kata/TradingCardGame/">
            Trading Card Game kata
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
