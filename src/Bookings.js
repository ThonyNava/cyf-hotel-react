import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [dataBase, setDataBase] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(data => {
        setDataBase(data);
        setBookings(data);
      })
      .catch(error => {
        console.log(`🔥 We got the error ${error} 🔥`);
      });
  }, []);

  const search = searchVal => {
    if (searchVal !== "") {
      const filteredBookings = dataBase.filter(
        booking =>
          booking.firstName === searchVal || booking.surname === searchVal
      );
      setBookings(filteredBookings);
    } else {
      setBookings(dataBase);
    }
  };

  const idUpdater = id => {
    setProfileId(id);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setProfileId={idUpdater} />
        {profileId && <CustomerProfile id={profileId} />}
      </div>
    </div>
  );
};

export default Bookings;
