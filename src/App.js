import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">
            <small>Coded by SheCodes</small>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
