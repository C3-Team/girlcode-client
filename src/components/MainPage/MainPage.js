import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <section>
        <div className="first">
          <p className=" animate__animated animate__fadeIn">
            {" "}
            Nearly 1 in 4 women in their menstruating years experience{" "}
            <b>“period poverty”</b> ranging from the inability to purchase the
            products they need to the inability to go to work, school and go on
            with their day to day activities.
          </p>
        </div>
        <div className="second">
          <p className=" animate__animated animate__fadeIn">
            GirlCode is a platform that matches individuals who need menstrual
            products to ones who can provide products based on location and
            urgency. Ask, and you shall receive!
          </p>
        </div>
        <div>
          <p className="second animate__animated animate__pulse">
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
        </div>
        {/* <div className="third">
          <div className="fourth">
            <h3>
              <Link style={{ textDecoration: "none" }} to="needpage">
                I,need
              </Link>
            </h3>
          </div>
          <div className="fourth">
            <h3>
              <Link style={{ textDecoration: "none" }} to="havepage">
                I,have
              </Link>
            </h3>
          </div>
        </div> */}
      </section>

      <br />

      <footer>&copy; 2021 GirlCode</footer>
    </>
  );
};

export default MainPage;
