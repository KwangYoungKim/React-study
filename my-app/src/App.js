import logo from './logo.svg';
import './App.css';

function App() {
  let hellow ='안녕하세요!. react'
  return (
    <div className="App">
      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {hellow}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
