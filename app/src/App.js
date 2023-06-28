import logo from './logo.svg';
import './App.css';

// I did this 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Testing navBar */}
        <Navbar />
        <Test />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React My Dude
        </a>
      </header>
    </div>
  );
}

export default App;
