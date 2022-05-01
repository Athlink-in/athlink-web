import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import UserContent from './UserContent';

function App() {
  // const url = 'ws://localhost:8080/testWebsocket2/keeratg@gmail.com';
  // const ws = new W3CWebSocket(url);

  // ws.onopen = () => {
  //   console.log('connected to websocket!');
  //   const data = { fromEmail: 'keeratg@gmail.com', toEmail: 'random', content: 'gord' };
  //   ws.send(JSON.stringify(data));
  // };

  // ws.onmessage = (e) => {
  //   console.log(e);
  // };

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
      <Router>
        <AuthProvider>
          <UserContent />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
