/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";

function Navigations() {
  return (
    <div id="navbar" className="navbar">
      Navigations:
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navigations;

//function NavBar() {
//    return (
//      <div id="navbar" className="navbar">
//        NavBar:
//        <Link to="/">All-Players</Link>
//        <Link to="/new-player">ADD NEW PLAYER</Link>
//      </div>
//    );
//  }
//  //<Link to="/players/:id">SINGLE PLAYER</Link>
//
//  export default NavBar;
