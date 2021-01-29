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
              <li>
                <Link to="/needpage"> I Need</Link>
              </li>
              <li>
                <Link to="/havepage">I Have</Link>
              </li>
              <li>
                <div className="animate__animated animate__shakeY">
                  <a
                    target="_blank"
                    target="_blank"
                    href="https://checkout.square.site/merchant/MLZMPESY4AYJD/checkout/TEOJREQNW4MEKLQ7EPCZELUF"
                  >
                    Donate
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
