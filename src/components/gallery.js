import '../styles/gallery.css';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <br />
      <br />
      <div className="image-collage">
        <img src={img1} alt="img1" className="portrait" />
        <div className="landscape-group">
          <img
            src={img2}
            alt="img2"
            className="landscape"
            style={{ marginBottom: '5px' }}
          />
          <img src={img3} alt="img3" className="landscape" />
        </div>
        <img src={img4} alt="img4" className="portrait" />
      </div>
    </div>
  );
}

export default Gallery;
