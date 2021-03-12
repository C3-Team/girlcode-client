import React from "react";
import { Link } from "react-router-dom";
import Women from "../../assets/4women.png";
const MainPage = () => {
  return (
    <>
      <section className="main">
        <p className=" animate__animated animate__fadeIn">
          {" "}
          Nearly 1 in 4 women in their menstruating years experience{" "}
          <b>“period poverty”</b> ranging from the inability to purchase the
          products they need to the inability to go to work, school and go on
          with their day to day activities.
        </p>
        <p className=" animate__animated animate__fadeIn">
          GirlCode is a platform that matches individuals who need menstrual
          products to ones who can provide products based on location and
          urgency. Ask, and you shall receive!
        </p>
        <p className="animate__animated animate__pulse">
          Post your{" "}
          <Link to="/needpage">
            <b>NEEDS</b>
          </Link>{" "}
          or{" "}
          <Link to="/havepage">
            {" "}
            <b>INVENTORIES</b>{" "}
          </Link>
          , but before that, check out what your neighbors{" "}
          <Link to="/needlist">
            <b>NEEDS</b>
          </Link>{" "}
          or
          <Link to="/havelist">
            {" "}
            <b>HAVE</b>
          </Link>
          .
        </p>
      </section>
      <div className="image">
        <img className="logo-img" src={Women} alt="four women logo" />
      </div>
      <br />
      <footer>&copy; 2021 GirlCode</footer>
    </>
  );
};

export default MainPage;
