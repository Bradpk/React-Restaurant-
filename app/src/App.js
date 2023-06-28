import logo from './logo.svg';
import './App.css';

// I did this 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import MenuItems from './components/MenuItems';
import Navbar from './components/Nav';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Test />
      
        <a>
          Learn React My Dude
        </a>
        <Footer />
      
    </div>
  );
}

export default App;
