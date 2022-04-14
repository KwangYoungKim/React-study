import logo from './logo.svg';
import './App.css';

function App() {
  let hellow = '안녕하세요!. react'
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
        >           Learn React <br />
          Git merage Test <br />
          언제쯤 react 활용을 자유롭게 구사할까?
        </a>
      </header>
    </div>
  );
}

export default App;
