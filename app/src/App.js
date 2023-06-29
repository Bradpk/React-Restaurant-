import './App.css';

// I did this 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import MenuItems from './components/MenuItems';
import Navbar from './components/Nav';
import Test from './components/Test';
import Slither from './components/Slither';


function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Slither />
        <MainContent />
        <Slither />
        <Footer />
      
    </div>
  );
}

export default App;
