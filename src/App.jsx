import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Cart from "./components/Cart";
import { useState } from "react";
import CartContext from "./context/CartContext";
import "./App.css";
const App = () => {
  const [cartList, setCartList] = useState([]);
  const addCartItem = (products) => {
    setCartList((prevCartList) => [...prevCartList, products]);
  };
  const deleteCartItem = (id) => {
    let newCartList = cartList.filter((eachObj) => eachObj.Id !== id);
    setCartList(newCartList);
  };
  return (
    <BrowserRouter>
      <CartContext value={{ cartList, addCartItem, deleteCartItem }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/*<Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
