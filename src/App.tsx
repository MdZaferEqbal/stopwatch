import StopWatch from "./components/StopWatch";
import "./App.css";

function App() {
  return (
    <>
      <div className="App container" role="application">
        <header className="app-header">
          <h1>Stopwatch</h1>
        </header>

        <main className="app-main">
          <div className="stopwatch-container" role="cell">
            <StopWatch />
          </div>
        </main>
      </div>
      <footer className="app-footer">
        <p>© 2025 Zafer Precision Timer Inc.</p>
      </footer>
    </>
  );
}

export default App;
