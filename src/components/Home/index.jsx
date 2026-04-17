import Header from "../Header";
import "./index.css";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate("/books");
  };
  return (
    <div className="home-bg">
      <Header />
      <div className="banner">
        <div className="banner-text">
          <h1>Expand Your Mind by reading Booksy Books</h1>
          <p>
            Discover a world of knowledge and imagination with our curated
            collection of books.your digital sanctuary for stories that inspire,
            educate, and entertain. <br />
            We believe books are the truest friends, acting as a vast repository
            of knowledge, imagination, and perspective. One click away. <br />
          </p>
          <button onClick={onClickNavigate}>Explore Now</button>
        </div>
        <div className="banner-image">
          <img
            src="https://i.pinimg.com/236x/b7/cd/c6/b7cdc68b47a112f8256fc23764d044cb.jpg"
            alt="Book Illustration"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
