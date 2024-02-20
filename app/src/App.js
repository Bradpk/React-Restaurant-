import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Nav';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
