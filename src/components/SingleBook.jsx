/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function SingleBook() {
  // get a hold of the selected book's id from the URL using useParams
  const { id } = useParams();
  //create a const that calls useNavigate() function to be used later
  const navigate = useNavigate();
  // create a function that calls useNavigate() with  the home path: "/" passed inside
  const returnToList = () => {
    navigate("/");
  };

  const [book, setBook] = useState(null);
  const [error, setError] = useState(null); // handle cases where book data is null/undefined
  const [loading, setLoading] = useState(true); // track the loading state

  useEffect(() => {
    const fetchSingleBook = async () => {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
        );
        const result = await response.json();
        console.log("Fetched book data:", result);

        if (!result.book || !result.book?.title) {
          setError("Book not found");
        } else {
          setBook(result.book);
        }
      } catch (err) {
        setError(`Failed to fetch book data: ${err.message}`);
      } finally {
        setLoading(false); // loading is complete and is now set to false
      }
    };

    fetchSingleBook();
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {book && (
        <div>
          <h2>
            {book.title} by {book.author}
          </h2>
          <p>{book.description}</p>
          <img
            src={book.coverimage}
            alt={`Cover of ${book.title}`}
            style={{ maxWidth: "200px" }}
          />
          <button onClick={returnToList}>Return to All Books List</button>
        </div>
      )}
    </div>
  );
}

export default SingleBook;
