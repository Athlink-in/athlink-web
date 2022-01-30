import logo from '../src/logos/logo_orange.png';
import './App.css';
import Login from './Login'
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom"; 
import { AuthProvider } from "./contexts/authContext"
import PrivateRoute from './PrivateRoute';
import MainContent from "./mainContent"

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
            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<MainContent/>}/>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
