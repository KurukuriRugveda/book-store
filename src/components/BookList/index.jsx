import RangeSlider from "react-range-slider-input";
import Header from "../Header";
import BookItem from "../BookItem";
import { useState, useEffect } from "react";
import "./index.css";
const BookList = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const getBookList = async () => {
      const apiUrl = "https://www.jsonkeeper.com/b/SQID2";
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      setBookList(fetchedData);
    };
    getBookList();
  }, []);
  return (
    <div>
      <Header />
      <input
        type="search"
        placeholder="Search by title, author or genre"
        className="input"
      />
      <ul className="book-list">
        {bookList.map((eachObj) => (
          <BookItem key={eachObj.uniqueid} bookObj={eachObj} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
