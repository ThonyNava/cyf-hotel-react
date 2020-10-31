import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="container text-center">
        <div className=" row d-flex justify-content-between">
          <TouristInfoCards
            img="https://peoplemakeglasgow.com/templates/people/helper/timthumb.php?w=1680&h=480&src=images/Homepage_Banners/tower_cityscapehomepagebanner.jpg"
            url="https://peoplemakeglasgow.com"
            name="Glasgow"
          />
          <TouristInfoCards
            img="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FMCR%20Header%20Your%203_web.jpg&action=Background_Overlay"
            url="https://visitmanchester.com"
            name="Manchester"
          />
          <TouristInfoCards
            img="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
            url="https://visitlondon.com"
            name="London"
          />
        </div>

        <Bookings />
        <Restaurant />
        <Footer
          arr={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    </div>
  );
};

export default App;
