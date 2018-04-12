import React from 'react';


const User = () => {
  return (
    <div>
      <h1>User</h1>
      <ul>
        {/* {props.allUsers.map(( user, index ) => (
          <li key={index}>
          <Link to={`users/${user.name}`}>
            {user.name} belongs to {user.house}
          </Link>
          </li>
        ))
        } */}
      </ul>
    </div>
  )
}

export default User;