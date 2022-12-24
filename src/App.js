// images
import logo from './resources/images/vosie.jpg';
// import marie from './resources/images/marie.jpg';
import earrings from './resources/images/earrings.png';
import earrings2 from './resources/images/earring2.png';
import ring from './resources/images/ring.png';
import ring2 from './resources/images/ring2.png';

// styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './App.css';

// components
import { Carousel } from 'react-responsive-carousel';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="App">
      {/* <div className="marieWrapper">
        <img className="marie" alt="marie" src={marie} />
      </div> */}
      <header className="App-header">
        <Snowfall />
        <a rel="noreferrer" target="_blank" href="https://www.etsy.com/uk/shop/vosiejewellery">
          <img className="logo" alt="vosie logo" src={logo} />
        </a>
        <div className="text">
          Dear Marie, <br />

          You are now the owner of vosiejewellery.com <br />

          Merry Christmas! - Henry
        </div>
        <div className="carousel">
          <Carousel infiniteLoop autoPlay interval="5000">
            <div>
              <img alt="Silver Rectangle Stud / Thread Through Earrings" src={earrings} />
              <p className="legend">Silver Rectangle Stud / Thread Through Earrings</p>
            </div>
            <div>
              <img alt="Silver Ring with Ebony" src={ring} />
              <p className="legend">Silver Ring with Ebony</p>
            </div>
            <div>
              <img alt="Silver Geometric Flat Top Ring" src={earrings2} />
              <p className="legend">Silver Geometric Flat Top Ring</p>
            </div>
            <div>
              <img alt="Silver thread through Earrings with Strawberry quartz" src={ring2} />
              <p className="legend">Silver thread through Earrings with Strawberry quartz</p>
            </div>
          </Carousel>
        </div>
      </header>
    </div>
  );
}

export default App;
