import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navContainer">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  </div>
);

export default Header;
