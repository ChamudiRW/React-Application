import '../../styles/packages/adventure.css';
import cover from '../../assets/packages/pic2.png';
import A1 from '../../assets/packages/accommodation.png';
import A2 from '../../assets/packages/calendar.png';
import A3 from '../../assets/packages/meal.png';
import A4 from '../../assets/packages/bus.png';

function Beach() {
  return (
    <div>
      <div className=" full-width  mb-50">
        <img src={cover} alt="cover" className="Pcover" />
      </div>{' '}
      <div className="full-width mb-50">
        <h1 className="content-heading h1">Beach Packages</h1>
      </div>
      <div className="full-width boxes mb-50">
        <div className="A-container">
          <img src={A1} alt="A1" className="A" />
          Accomodation
        </div>
        <div className="A-container">
          <img src={A2} alt="A1" className="A" />
          No. of Days
        </div>
        <div className="A-container">
          <img src={A3} alt="A1" className="A" />
          Meals
        </div>
        <div className="A-container">
          <img src={A4} alt="A1" className="A" />
          Transport
        </div>
      </div>
      <div className=" summary-container full-width  mb-50">
        <div className=" sum mb-50">
          <h1 className=" h2 mb-20">Package Summary</h1>
          <p className=" h4">
            Pink Flamingo Travels is a travel agency that creates personalized
            trips catered to your unique needs. They believe in immersing
            oneself in different cultures to create lifelong memories. Their
            expert travel consultants plan every detail so you can enjoy your
            journey. They offer tailor made trips for romantic getaways,
            adventures, and family vacations. Contact them today to plan your
            perfect itinerary.
          </p>
        </div>
        <div className="pDetails">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" id="name" name="name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Beach;
