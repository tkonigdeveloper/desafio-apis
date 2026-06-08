import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
