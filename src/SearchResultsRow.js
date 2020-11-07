import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = props => {
  const [highlighting, setHighlighting] = useState(false);
  const setTheHighlighting = () => {
    setHighlighting(!highlighting);
  };

  const showProfile = () => {
    props.setProfileId(props.result.id);
  };

  const checkIn = moment(props.result.checkInDate);
  const checkOut = moment(props.result.checkOutDate);

  return (
    <tr
      onClick={setTheHighlighting}
      className={highlighting ? "bg-info text-white" : ""}
    >
      <th scope="row">{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button onClick={showProfile} className="btn btn-info">
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultsRow;
