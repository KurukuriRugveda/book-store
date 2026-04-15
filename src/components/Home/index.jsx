import Header from "../Header";
import "./index.css";
const Home = () => {
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
          <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
