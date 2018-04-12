import React from "react";
import { Link } from 'react-router-dom';

const Users = props => {
  return (
    <div>
      <h1>Users!</h1>
      <ul>
        { 
          props.allUsers.map(( user, index ) => (
            <li key={index}>
            <Link to={`/users/${user.name}`}>
              {user.name} belongs to {user.house}
            </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Users;