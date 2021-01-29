import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Login</h1>
          <p>Login using the form below.</p>
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
            <a href="https://app.termsfeed.com/wizard/terms-conditions/">
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
