import React from "react";

const House = props => {
  return (
    <div>
      <h1>🔮 Houses 🔮</h1>
      <ul>
        {props.allHouses.map((user, index) => (
          <li key={index}> 
            ⭐ The role of {user.name} was played by {user.actor}.⭐
          </li>
        ))}
      </ul>
    </div>
  )
}
export default House;