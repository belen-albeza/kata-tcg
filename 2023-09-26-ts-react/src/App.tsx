import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
      <main>TODO</main>
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
