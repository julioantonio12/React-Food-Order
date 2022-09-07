import mealImg from "../../assets/meals.jpg";
import classes from "../Styles/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>DeliMeal</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Una mesa con comida deliciosa" />
      </div>
    </>
  );
};

export default Header;
