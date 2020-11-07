import React from "react";
import SearchResultsRow from "./SearchResultsRow.js";

let SearchResults = props => {
  const rows = props.results.map((result, index) => (
    <SearchResultsRow
      result={result}
      setProfileId={props.setProfileId}
      key={index}
    />
  ));

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
      <tbody>{rows}</tbody>
    </table>
  );
};

export default SearchResults;
