import './styles/App.css';
import Navbar from './components/nav';
import Hero from './components/heropage';
import Footer from './components/footer';
import Cards from './components/Cards/cards';
import Aboutus from './components/aboutus';
import How from './components/howitworks';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <br />
        <Cards />
        <br />
        <Aboutus />
        <br />
        <How />
        <Gallery />
        <br /> <br />
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
