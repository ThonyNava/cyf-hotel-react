import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const [bookings, setBookings] = useState([]);
  const [bookings, setBookings] = useState(FakeBookings);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   fetch(`https://cyf-react.glitch.me`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       return setBookings(data);
  //     });
  //   }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log(filteredBookings);
    setBookings(filteredBookings);
  };

  const handleSearchInput = event => {
    // console.log(event.target.value);
    return setSearchInput(event.target.value);
  };

  console.log(`render: ${bookings}`);

  return (
    <div className="App-content">
      <div className="container">
        <Search
          search={search}
          value={searchInput}
          onChange={handleSearchInput}
        />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
