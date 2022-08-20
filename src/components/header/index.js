import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  window.scroll(function () {
    if ($(document).scrollTop() > 100) {
      "nav".addClass("animate");
    } else {
      "nav".removeClass("animate");
    }
  });
  return (
    <>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
          <a  class="navbar-brand" id="name">
            Resty
          </a>
        </div>
        <div id="resNav">
          <ul class="nav navbar-nav navbar-right" >
           
              <Link to="/" className="button-23">Home</Link>
          
          
          
              <Link to="/history" className="button-244">History</Link>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
