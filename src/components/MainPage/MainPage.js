import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <section>
        <h3 className=" first animate__animated animate__fadeInRightBig">
          Nearly 1 in 4 women in their menstruating years experience “period
          poverty” ranging from the inability to purchase the products they need
          to the inability to go to work, school and go on with their day to day
          activities.
        </h3>
        <h3 className=" second animate__animated animate__fadeInLeftBig">
          GirlCode is a platform that matches individuals who need menstrual
          products to ones who can provide products based on location and
          urgency. Ask, and you shall receive!
        </h3>
        <h3>
          <Link style={{ textDecoration: "none" }} to="needpage">
            post a need
          </Link>
        </h3>
        <h3>
          <Link style={{ textDecoration: "none" }} to="havepage">
            post an inventory
          </Link>
        </h3>
      </section>

      <br />

      <footer>&copy; 2021 GirlCode</footer>
    </>
  );
};

export default MainPage;
