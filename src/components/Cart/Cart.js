import Modal from "../UI/Modal";
import classes from "../Styles/Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Cantidad Total</span>
        <span>35.67</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cerrar</button>
        <button className={classes.button}>Orden</button>
      </div>
    </Modal>
  );
};

export default Cart;
