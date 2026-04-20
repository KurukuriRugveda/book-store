import { FaRegStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineShuffle } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import "./index.css";
const BookItem = (props) => {
  const { bookObj } = props;
  const { Title, price, description, coverImage, Author } = bookObj;
  return (
    <li>
      <Link className="remove-underline">
        <article className="card">
          <img className="book-img" src={coverImage} alt="Book-image" />
          <div className="card-text">
            <h1>{Title}</h1>
            <h4>{Author}</h4>
            <h3>${price}</h3>
            <div className="stars-cont">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="card-para">{description}</p> <br />
            <div className="button-icons-cont">
              <button className="add-to-cart-btn">Add to Cart</button>
              <span className="icons-cont">
                <div className="icons-bg">
                  <MdFavoriteBorder className="icon" />
                </div>
                <div className="icons-bg">
                  <MdOutlineShuffle className="icon" />
                </div>
                <div className="icons-bg">
                  <MdOutlineRemoveRedEye className="icon" />
                </div>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};
export default BookItem;
