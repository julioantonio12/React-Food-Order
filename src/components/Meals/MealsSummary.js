import classes from "../Styles/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, entregada a ti</h2>
      <p>
        Escoge tu comida favorita de nuestro amplio catálogo de comidas
        disponibles y disfruta una deliciosa comida o cena en casa.
      </p>
      <p>
        Todas nuestras comidas son cocinadas con unos ingredientes de gran
        calidad, justo-a-tiempo y por supuesto por chefs experimentados.
      </p>
    </section>
  );
};

export default MealsSummary;
