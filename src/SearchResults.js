import React, { useState } from "react";
import moment from "moment";

let SearchResults = props => {
  console.log(props.results);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out date</th>
          <th scope="col">N° of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => {
          const [highlighting, setHighlighting] = useState("");

          let setTheHighlighting = () => {
            if (highlighting) {
              setHighlighting("");
            } else {
              setHighlighting("bg-info text-white");
            }
          };

          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          return (
            <tr key={i} onClick={setTheHighlighting} className={highlighting}>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkOut.diff(checkIn, "days")}</td>
              {/* <td>{booking.checkInDate.diff(booking.checkOutDate, "days")}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
