import React, { Component } from "react";

const Signup = () => {
  return (
    <div>
      <form action="action_page.php">
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
          </label>
          <br />
          <label htmlFor="psw">
            <b>Password</b>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </label>
          <br />
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
            <br />
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
          </label>
          <br />
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
