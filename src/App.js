import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './PrivateRoute';
import MainContent from './mainContent';

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
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<MainContent />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
