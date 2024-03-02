import React from "react";
import './main.css'
import { Link } from "react-router-dom";

function Main() {
    return(
      <div className="main">
          <div className="container">
        <h2 className="title"><span className="change">Transform </span>Your Ideas <br/>Into <span className="change">Art</span></h2>
      <Link to='/signup'>  <button className="btn btn-warning" id="get">Get Started</button></Link>
    </div>
      </div>
    )
}

export default Main;