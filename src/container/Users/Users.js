import React from "react";

const Users = props => {
  return (
    <div>
      <h1>Users!</h1>
      <ul>
        { props.allUsers.map((user, index) => (
          <li key={index}> {user.name} belongs to {user.house}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users;