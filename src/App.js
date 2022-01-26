import logo from './logo1.png';
import './App.css';
import Login from './Login'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welome to Athlink!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up!
        </a>
      </header> */}
      <Login/>
    </div>
  );
}

export default App;
