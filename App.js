import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Adventure from './components/packages/adventure';
import Beach from './components/packages/beach';
import City from './components/packages/city';
import Culture from './components/packages/culture';
import Family from './components/packages/family';
import Luxury from './components/packages/luxury';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ...rest of the imports

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/adventure" element={<Adventure />} />
            <Route path="/beach" element={<Beach />} />
            <Route path="/city" element={<City />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/family" element={<Family />} />
            <Route path="/luxury" element={<Luxury />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
