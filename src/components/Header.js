import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navContainer">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div>
      <ul className="nav">
        {/* I have temporarily disabled "React Link" for testing purposes */}
        <li>Home</li>
        <li>Calculator</li>
        <li>Quote</li>
      </ul>
    </div>
  </div>
);

export default Header;
