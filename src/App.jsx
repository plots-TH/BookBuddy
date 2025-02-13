import React, { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import { Route, Routes } from "react-router-dom";
import AllBooks from "./components/Books";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <div>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

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

      <div id="navbar-container">
        {/* Navbar goes here */}
        <Navigations token={token} setToken={setToken}></Navigations>
      </div>

      <Routes>
        <Route path="/" element={<AllBooks />}></Route>
        <Route path="/book/:id" element={<SingleBook token={token} />} />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        ></Route>
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        ></Route>
        <Route path="/account" element={<Account token={token} />}></Route>
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
