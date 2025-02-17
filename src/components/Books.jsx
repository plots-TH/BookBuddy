/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchAllBooks from "../API/index";

function AllBooks() {
  // create a const that calls useNavigate() so we can use it later on buttons/links to switch between routes aka "pages"
  const navigate = useNavigate();
  const [displayedBooks, setDisplayedbooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("Fetching books...");
    const getBooks = async () => {
      const result = await fetchAllBooks();
      console.log("Result from fetch:", result);
      console.log(result.books);

      setDisplayedbooks(result.books);
      setFilteredBooks(result.books || []);
    };
    getBooks();
  }, []);

  const handleSearch = (e) => {
    const searchCriteria = e.target.value.toLowerCase();
    setSearchInput(searchCriteria);

    const searchResults = displayedBooks.filter((book) =>
      book.title.toLowerCase().includes(searchCriteria)
    );
    setFilteredBooks(searchResults);
  };

  console.log("displayedBooks:", displayedBooks);

  return (
    <div>
      <h2>Library Catalogue</h2>
      {/* Render the list of books */}

      <input
        type="text"
        placeholder="Search for a book..."
        value={searchInput}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="booksContainer">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bookCard">
              <h4>{book.title}</h4>
              {book.coverimage && (
                <img src={book.coverimage} alt={`Cover of ${book.title}`} />
              )}
              <button
                className="single-book-details-button"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                View Book Details
              </button>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default AllBooks;
