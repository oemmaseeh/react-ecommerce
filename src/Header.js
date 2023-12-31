// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {user ? (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
