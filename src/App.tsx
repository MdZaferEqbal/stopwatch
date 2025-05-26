import StopWatch from "./components/StopWatch";
import "./App.css";

function App() {
  return (
    <>
      <div className="App container">
        <header className="app-header">
          <h1>Stopwatch</h1>
        </header>

        <main className="app-main">
          <div className="stopwatch-container">
            <StopWatch />
          </div>
        </main>
      </div>
      <footer className="app-footer">
        <p>© 2024 Zafer Precision Timer Inc.</p>
      </footer>
    </>
  );
}

export default App;
