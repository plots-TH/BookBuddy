/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchAllBooks from "../API/index";

function AllBooks() {
  // create a const that calls useNavigate() so we can use it later on buttons/links to switch between routes aka "pages"
  const navigate = useNavigate();
  const [displayedBooks, setDisplayedbooks] = useState([]);

  useEffect(() => {
    console.log("Fetching books...");
    const getBooks = async () => {
      const result = await fetchAllBooks();
      console.log("Result from fetch:", result);
      console.log(result.books);

      setDisplayedbooks(result.books);
    };
    getBooks();
  }, []);

  console.log("displayedBooks:", displayedBooks);

  return (
    <div>
      <h2>Library Catalogue</h2>
      {/* Render the list of books */}
      <ul>
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book) => (
            <li key={book.id}>
              <h4>{book.title}</h4>
              {book.coverimage && (
                <img
                  src={book.coverimage}
                  alt={`image of ${book.title}'s cover.`}
                />
              )}
            </li>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </ul>
    </div>
  );
}

export default AllBooks;
