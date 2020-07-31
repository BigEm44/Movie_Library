import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <h2>Movie Library</h2>
      <div className="header__buttons">
        <Link className="header__buttons__button" to="/">
          Home
        </Link>
        <Link className="header__buttons__button" to="/addMovie">
          Add Movie
        </Link>
        <Link className="header__buttons__button" to="/library">
          Library
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
