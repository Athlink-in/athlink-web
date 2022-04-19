import './App.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './PrivateRoute';
import MainContent from './mainContent';
import About from './About';
import Profile from './Profile';
import Messages from './Messages';
import PostPage from './PostPage';

function App() {
  const url = 'ws://localhost:8080/testWebsocket2/keeratg@gmail.com';
  const ws = new W3CWebSocket(url);

  ws.onopen = () => {
    console.log('connected to websocket!');
    const data = { fromEmail: 'keeratg@gmail.com', toEmail: 'random', content: 'gord' };
    ws.send(JSON.stringify(data));
  };

  ws.onmessage = (e) => {
    console.log(e);
  };

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
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<MainContent />} />
              {/* <Route exact path='/about' element={<About />}> </Route> */}
              <Route exact path='/profile' element={<Profile />}> </Route>
              <Route path="/profile/:email" element={<Profile />} />
              <Route exact path='/messages' element={<Messages />} />
              <Route path='/post/:postId' element={<PostPage />} />
            </Route>
            <Route exact path='/about' element={<About />}> </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
