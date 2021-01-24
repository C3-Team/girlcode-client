import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <a href="/" className="brand-logo">
              <h1>&nbsp;GirlCode</h1>
            </a>
            <ul className="nav-links">
              <li>
                <Link to="/signup"> Sign-up </Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
