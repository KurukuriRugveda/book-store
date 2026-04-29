import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { useParams } from "react-router";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShuffle } from "react-icons/md";
import Header from "../Header";
import "./index.css";
const BookDetail = () => {
  const [bookObj, setBookObj] = useState({});
  const { Title, price, description, coverImage } = bookObj;
  const { id } = useParams();
  useEffect(() => {
    const getBookDetails = async () => {
      const apiUrl = "https://www.jsonkeeper.com/b/SQID2";
      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      const requiredBook = fetchedData.filter(
        (eachObj) => eachObj.Id === Number(id),
      );
      setBookObj(requiredBook[0]);
    };
    getBookDetails();
  }, []);

  return (
    <>
      <Header />
      <div className="detail-cont">
        <div>
          <img src={coverImage} alt="Book-Image" className="book-img" />
        </div>
        <div className="sub-cont">
          <h1>{Title}</h1>
          <div className="stars-cont">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <p className="desc">{description}</p>
          <p>
            <span className="span-price">Price: ${price} </span>
          </p>
          <div className="button-icons-cont">
            <button className="add-to-cart-btn">Add to Cart</button>
            <div className="icons-bg">
              <MdFavoriteBorder className="icon" />
            </div>
            <div className="icons-bg">
              <MdOutlineShuffle className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookDetail;
