import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <footer>
      <main>
        <h3>
          GirlCode is a platform that matches individuals who need menstrual
          products to ones who can provide products based on zipcode and
          urgency. Ask, and you shall receive!
        </h3>
        <Link className="need-have" to="/needpage">
          Needs
        </Link>
        <Link className="need-have" to="/havepage">
          Inventory
        </Link>
      </main>
      <br />
      <footer>&copy; 2020 GirlCode</footer>
    </footer>
  );
};

export default MainPage;
