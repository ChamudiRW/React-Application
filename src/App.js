import './styles/App.css';
import Navbar from './components/nav';
import Hero from './components/hero';
import Footer from './components/footer';
import Cards from './components/Cards/cards';
import Aboutus from './components/aboutus';
import How from './components/howitworks';
import Gallery from './components/gallery';
import Ratings from './components/ratings';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Hero />
        <br />
        <Cards />
        <br />
        <Aboutus />
        <br />
        <How />
        <Gallery />
        <br />
        <Ratings />
        <br />
        <br /> <br /> <br /> <br />
        <br /> <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
