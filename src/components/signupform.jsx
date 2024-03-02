import React from "react";
import "./signupform.css"; 

function SignupForm() {
  return (
    <div className="signupcontainer">
        <div className="signup-form-container">
      <h2>Signup to Artify</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="username" id="firstname" name="firstname" placeholder="Enter First Name" />
        </div>
         <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="username" id="lastname" name="lastname" placeholder="Enter Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Enter Password</label>
          <input type="phone" id="phone" name="phone" placeholder="+92"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" />
        </div>
        <button className="btn"id="signupp" type="submit">Signup</button>
        <br/>
        <a className="link" href="/login">Already have an account?</a>
  

      </form>
    </div>
    </div>
  );
}

export default SignupForm;
