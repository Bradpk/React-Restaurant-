import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Nav';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
        <Footer />
        <div className='content'>
          {/* <Routes>
            <Route path="/About" element={<About/>}>
            </Route>
        </Routes> */}
      </div>
      </div>
    </Router>
  );
}

export default App;
