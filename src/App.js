import Aboutus from './components/home/aboutus';
import Cards from './components/home/cards';
import Hero from './components/home/hero';
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
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
