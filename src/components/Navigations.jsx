/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navigations({ token, setToken }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };
  return (
    <div id="navbar" className="navbar">
      Navigations:
      <Link to="/">View All Books</Link>
      {token && <Link to="/account">My Account</Link>}
      {token ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {token ? null : <Link to="/register">Sign Up</Link>}
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
