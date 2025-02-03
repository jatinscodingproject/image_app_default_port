import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Image app
        </p>
        <a
          className="App-link"
          href="http://47.91.121.123:3000/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Login page
        </a>
      </header>
    </div>
  );
}

export default App;
