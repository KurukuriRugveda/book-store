import "./index.css";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!sw800" />
          <p className="Logo-Text">
            <Link to="/" className="Logo-Text">
              Booksy{" "}
            </Link>
          </p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <div className="icons-container">
          <div className="icon-bg">
            <MdOutlineFavoriteBorder />
          </div>
          <div className="icon-bg">
            <FaCartShopping />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
