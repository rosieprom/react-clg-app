import React, { useCallback, useState } from "react";
import Button from "../components/button";
import BooksList from "../components/booksList";
import LoadingSpinner from "../components/loadingSpinner";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?author=${searchText}`
      );
      console.log(response);
      if (response.status === 404) {
        setError(true);
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log({ data });
      const transformedData = data.docs.map((bookData) => {
        return {
          key: bookData.key,
          name: bookData.title
        };
      });
      setBooks(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [searchText]);

  let content = <p>No books found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <section style={{ height: "100vh" }}>
      <h1>Books</h1>
      <input type="text" value={searchText} onChange={searchTextHandler} />
      <Button onClick={fetchBooksHandler}>Search</Button>
      {content}
    </section>
  );
};

export default Book;
