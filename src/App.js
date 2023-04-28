import './styles/App.css';
import Navbar from './components/nav';
import Hero from './components/heropage';
import Footer from './components/footer';
import Card1 from './components/Cards/card1';
import Card2 from './components/Cards/card2';
import Card3 from './components/Cards/card3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />

        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
