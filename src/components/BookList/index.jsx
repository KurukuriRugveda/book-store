import RangeSlider from "react-range-slider-input";
import Header from "../Header";
import BookItem from "../BookItem";
import "./index.css";
const BookList = () => {
  return (
    <div>
      <Header />
      <input
        type="search"
        placeholder="Search by title, author or genre"
        className="input"
      />
      <ul>
        <BookItem />
        <BookItem />
      </ul>
    </div>
  );
};

export default BookList;
