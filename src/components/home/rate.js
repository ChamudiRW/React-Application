import '../../styles/home/rate.css';
import Feed from './feed';
import rate from '../../assets/rate/rate.png';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

const Rate = () => {
  // const settings = {
  //   dots: true,

  //   infinite: true,

  //   speed: 500,

  //   slidesToShow: 2,

  //   slidesToScroll: 1,
  // };
  return (
    <div className="gallery-container full-width mb-50">
      <h1 className="gallery-heading h1 mb-50">Ratings and Reviews</h1>
      <div className="ratings">
        <div className="rate">
          <img src={rate} alt="rate" className="rate" />
        </div>

        {/* <Slider {...settings}> */}
        <div className="card">
          <Feed />
        </div>
        <div className="card">
          <Feed />
        </div>
        <div className="card">
          <Feed />
        </div>
        <div className="card">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Rate;
