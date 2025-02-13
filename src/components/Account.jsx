/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../API";

function Account({ token }) {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("Fetching user details...");
    const getUser = async () => {
      const result = await fetchUser(token);
      console.log("Result from User fetch:", result);

      setUser(result);
      setBooks(result.books);
    };

    if (token) {
      getUser();
    }
  }, [token]);

  const handleReturnBook = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/reservations/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      if (result.deletedReservation) {
        // Fetch the updated user data after returning the book
        const bookResponse = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/users/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const updatedUser = await bookResponse.json();
        setBooks(updatedUser.books);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>My Account:</h2>
      <p>
        <strong>User Email:</strong> {user?.email}
      </p>

      <p>
        <strong>First Name:</strong>
        {user?.firstname || " No first name provided"}
      </p>

      <p>
        <strong>Last Name:</strong>
        {user?.lastname || " No last name provided"}
      </p>

      <h3>Your Books:</h3>
      <div className="user-checked-out-books-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="bookCard" key={book.id}>
              <h2>{book.title}</h2>
              <img
                src={book.coverimage}
                alt={`image of ${book.title}'s cover.`}
              />
              <br />
              <button onClick={() => handleReturnBook(book.id)}>
                Return book
              </button>
            </div>
          ))
        ) : (
          <p>You have no books checked out.</p>
        )}
      </div>
    </div>
  );
}

export default Account;
