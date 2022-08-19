import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {

  (window).scroll(function(){
    if($(document).scrollTop() > 100){
      ('nav').addClass('animate');
    }else{
      ('nav').removeClass('animate');
    }
  })
  return (
    <>
   

   <nav class="navbar navbar-default navbar-fixed-top">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#resNav">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a href="#" class="navbar-brand">Resty</a>
  </div>
  <div class="collapse navbar-collapse" id="resNav">
    <ul class="nav navbar-nav navbar-right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/history">History</Link></li>
     
    </ul>
  </div>
</nav>  



    </>
  );
}

export default Header;
