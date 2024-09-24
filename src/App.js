import logo from './pe_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prayan Enricher just began journey... stay curious :)
        </p>
        <a
          className="App-link"
          href="https://prayanenricher.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Owner
        </a>
      </header>
    </div>
  );
}

export default App;
