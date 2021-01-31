import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <div>
            <Link to="/" className="brand-logo">
              {" "}
              <h1>&nbsp;GirlCode</h1>
            </Link>
            <ul className="nav-links dropdown">
              <button className="dropbtn">Needs</button>
              <div className="dropdown-content">
                <div>
                  <Link to="/needlist">List of Needs</Link>
                </div>
                <div>
                  <Link to="/needpage"> Post a need</Link>
                </div>
              </div>
            </ul>
            <ul className="nav-links dropdown">
              <button className="dropbtn">Inventories</button>
              <div className="dropdown-content">
                <div>
                  <Link to="/havelist">List of Inventories</Link>
                </div>
                <div>
                  <Link to="/havepage">Post an inventory</Link>
                </div>
              </div>
            </ul>
            <ul className="nav-links ">
              <li className="donatebtn">
                <div className="animate__animated animate__shakeY ">
                  <a
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
