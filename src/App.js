import Navbar from './components/navbar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
