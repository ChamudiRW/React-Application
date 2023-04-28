import './styles/App.css';
import Navbar from './components/nav';
import Hero from './components/heropage';
import Footer from './components/footer';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <br />
        <Cards />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
