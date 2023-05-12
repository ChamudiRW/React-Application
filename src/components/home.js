import Aboutus from './home/aboutus';
import Cards from './home/cards';
import Gallery from './home/gallery';
import Hero from './home/hero';
import How from './home/how';
import Rate from './home/rate';
import '../styles/Home.css';

function Home() {
  return (
    <div className="App">
      <Hero />
      <Cards />
      <Aboutus />
      <How />
      <Gallery />
      <Rate />
    </div>
  );
}

export default Home;
