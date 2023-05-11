import Footer from './components/footer';
import Aboutus from './components/home/aboutus';
import Cards from './components/home/cards';
import Gallery from './components/home/gallery';
import Hero from './components/home/hero';
import How from './components/home/how';
import Rate from './components/home/rate';
import Navbar from './components/navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Hero />
        <Cards />
        <Aboutus />
        <How />
        <Gallery />
        <Rate />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
