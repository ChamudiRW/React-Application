import '../../styles/home/gallery.css';
import img1 from '../../assets/gallery/image1.png';
import img2 from '../../assets/gallery/image2.png';
import img3 from '../../assets/gallery/image3.png';
import img4 from '../../assets/gallery/image4.png';

function Gallery() {
  return (
    <div className="gallery-container full-width mb-50">
      <h1 className="gallery-heading h1 mb-50">Gallery</h1>
      <div className="gal">
        <img src={img1} alt="img1" className="img1" />
        <div className="landscape">
          <img src={img2} alt="img2" className="img2" />
          <img src={img3} alt="img3" className="img3" />
        </div>
        <img src={img4} alt="img4" className="img4" />
      </div>
    </div>
  );
}

export default Gallery;
