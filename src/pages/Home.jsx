import { pizzas } from '../data/pizzas';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container mt-5 mb-5">
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
