import React, { useState } from "react";
import bookLogo from "./assets/books.png";
import { Route, Routes } from "react-router-dom";
import AllBooks from "./components/Books";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <div id="navbar-container">
        {/* Navbar goes here */}
        <Navigations></Navigations>
      </div>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
      <Routes>
        <Route path="/" element={<AllBooks />}></Route>
        <Route path="/book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
}

export default App;

//import NavBar from "./components/NavBar";
//import Main from "./components/Main";
//
//function App() {
//  return (
//    <div id="container">
//      <NavBar />
//      <Main />
//    </div>
//  );
//}
//
//export default App;
