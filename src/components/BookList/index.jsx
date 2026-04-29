import { Circles } from "react-loader-spinner";
import Header from "../Header";
import BookItem from "../BookItem";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import BookDetail from "../BookDetail";
import "./index.css";
const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    const getBookList = async () => {
      const apiUrl = "https://www.jsonkeeper.com/b/SQID2";
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setBookList(fetchedData);
      setIsLoading(false);
    };
    getBookList();
  }, []);
  const onChangeSearchInput = (event) => {
    setUserInput(event.target.value);
  };
  const renderLoadingView = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Circles color="#0077b6" />
        <h1>Loading</h1>
      </div>
    );
  };

  const renderBooksView = () => {
    return (
      <ul className="book-list">
        {searchBooks.map((eachObj) => (
          <BookItem key={eachObj.uniqueid} bookObj={eachObj} />
        ))}
      </ul>
    );
  };
  const searchBooks = bookList.filter((eachObj) =>
    eachObj.Title.toLowerCase().includes(userInput.toLowerCase()),
  );
  return (
    <div>
      <Header />
      <div className="search-div">
        <button className="search-btn">
          <IoSearchSharp />
        </button>
        <input
          type="search"
          placeholder="Search by title, author or genre"
          className="input"
          value={userInput}
          onChange={onChangeSearchInput}
        />
      </div>

      {isLoading ? renderLoadingView() : renderBooksView()}
    </div>
  );
};

export default BookList;
