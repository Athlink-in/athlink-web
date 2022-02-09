import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './Login';
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './PrivateRoute';
import MainContent from './mainContent';
import About from './About';
import Profile from './Profile';

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
<<<<<<< HEAD
              <Route exact path='/about' element={<About />}> </Route>
              <Route exact path='/profile' element={<Profile />}> </Route>
=======
>>>>>>> b5c5e1dbd34a1702f64504d4053d48aef460b2da
            </Route>
            <Route exact path='/about' element={<About />}> </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
