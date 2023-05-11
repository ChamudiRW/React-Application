import Aboutus from './components/home/aboutus';
import Cards from './components/home/cards';
import Hero from './components/home/hero';
import How from './components/home/how';
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
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
