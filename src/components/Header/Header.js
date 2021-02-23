import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            className="brand-logo"
          >
            {" "}
            <h1 className="girlcode-logo">&nbsp;GirlCode</h1>
          </Link>
          <ul className="nav-links dropdown">
            <button className="dropbtn">Needs</button>
            <div className="dropdown-content">
              <div>
                <Link style={{ textDecoration: "none" }} to="/needlist">
                  List of Needs
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none" }} to="/needpage">
                  {" "}
                  Post a need
                </Link>
              </div>
            </div>
          </ul>
          <ul className="nav-links dropdown">
            <button className="dropbtn">Inventories</button>
            <div className="dropdown-content">
              <div>
                <Link style={{ textDecoration: "none" }} to="/havelist">
                  List of Inventories
                </Link>
              </div>
              <div>
                <Link style={{ textDecoration: "none" }} to="/havepage">
                  Post an inventory
                </Link>
              </div>
            </div>
          </ul>
          <ul className="nav-links ">
            <button className="dropbtn">
              <div className=" donatebtn animate__animated animate__swing ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://checkout.square.site/merchant/MLZMPESY4AYJD/checkout/TEOJREQNW4MEKLQ7EPCZELUF"
                >
                  Donate
                </a>
              </div>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
