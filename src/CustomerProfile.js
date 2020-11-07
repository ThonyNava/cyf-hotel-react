import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  let loading = {
    id: "🤔",
    title: "🤔",
    firstName: "🤔",
    surname: "🤔",
    email: "🤔",
    vip: "🤔",
    phoneNumber: "🤔"
  };

  const [user, setUser] = useState(loading);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
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
        setUser(data);
      })
      .catch(error => {
        console.log(`🔥 We got the error ${error} 🔥`);
      });
  }, [props.id]);

  //   return props.id && <>{`The ID of this user is ${props.id}`} </>;
  return (
    <table className="table border border-info">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstName</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">vip</th>
          <th scope="col">phoneNumber</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.title}</td>
          <td>{user.firstName}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>
            {user.vip !== loading.vip ? (user.vip ? "Yes" : "no") : loading.vip}
          </td>
          <td>{user.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerProfile;
