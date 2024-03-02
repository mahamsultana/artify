import React from "react";
import "./loginform.css";

function LoginForm() {
  return (
    <div className="signupcontainer">
      <div className="signup-form-container">
        <h2>Login to Artify</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
          <button className="btn" id="signupp" type="submit">
            Login
          </button>
          <br />
          <br />
          <a className="link" href="/signup">
            Sign Up to Artify
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
