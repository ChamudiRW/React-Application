import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
