//In your index.js file, write a function to fetch the all the books from the API

const fetchAllBooks = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/books`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is ok

    const data = await response.json();
    return data; // Should return the array of books
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const fetchUser = async (token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const userData = await response.json();
    console.log("user data:", userData);
    return userData;
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
};

export { fetchUser };
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
