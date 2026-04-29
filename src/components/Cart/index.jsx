import "./index.css";
import CartItem from "../CartItem";
import Header from "../Header";
import CartContext from "../../context/CartContext";
import { use } from "react";
const Cart = () => {
  const { cartList } = use(CartContext);
  console.log(cartList);
  return (
    <div>
      <Header />
      <h1>Cart Items</h1>
      <ul className="cart-cont">
        {cartList.map((eachObj) => (
          <CartItem key={eachObj.Id} cartItemDetails={eachObj} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
