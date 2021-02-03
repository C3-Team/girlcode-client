import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <section>
        <div className="first">
          <h3 className=" animate__animated animate__fadeInRightBig">
            Nearly 1 in 4 women in their menstruating years experience “period
            poverty” ranging from the inability to purchase the products they
            need to the inability to go to work, school and go on with their day
            to day activities.
          </h3>
        </div>
        <div className="second">
          <h3 className=" animate__animated animate__fadeInLeftBig">
            GirlCode is a platform that matches individuals who need menstrual
            products to ones who can provide products based on location and
            urgency. Ask, and you shall receive!
          </h3>
        </div>
        <div>
          <h3 className="second animate__animated animate__pulse">
            Post your <Link to="/needpage">Needs</Link> or{" "}
            <Link to="/havepage">INVENTORIES</Link>, but before that, check out
            what your neighbors <Link to="/needlist">NEED</Link> or
            <Link to="/havelist"> HAVE</Link>.
          </h3>
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
