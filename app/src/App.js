import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
        </Switch> */}
      </div>
      </div>
    </Router>
  );
}

export default App;
