import "./index.css";
import CartContext from "../../context/CartContext";
import { use } from "react";
const CartItem = ({ cartItemDetails }) => {
  const { Title, price, description, coverImage, Id } = cartItemDetails;
  const { deleteCartItem } = use(CartContext);

  const onClickDelete = () => {
    deleteCartItem(Id);
  };
  return (
    <li className="cart-item">
      <img src={coverImage} alt="Book-Image" />
      <h2>{Title}</h2>
      <h2>${price}</h2>
      <h2>$ 120.00</h2>
      <button className="add-to-cart-btn">Check-Out</button>
      <button className="remove-btn" onClick={onClickDelete}>
        X
      </button>
    </li>
  );
};
export default CartItem;
