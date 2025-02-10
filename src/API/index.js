//In your index.js file, write a function to fetch the all the books from the API

const fetchAllBooks = async () => {
  try {
    const response = await fetch(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data; // Should return the array of books
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default fetchAllBooks;

//const fetchAllPlayers = async () => {
//  try {
//    const response = await fetch(
//      `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`
//    );
//    const result = await response.json();
//    return result.data.players;
//  } catch (err) {
//    console.error("uh oh, trouble fetching players!", err);
//    return [];
//  }
//};
