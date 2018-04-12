import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <button>
        <Link to="/users">Users</Link>
      </button>
      <button>
        <Link to="/houseUsers">Houses</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </nav>
  )
}

export default NavBar;