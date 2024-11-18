return (
  <div className="homepage">
    <h1 className="homepage-title">Pizzería Mamma Mia!</h1>
    <p className="homepage-description">Explore our delicious selection of pizzas below.</p>

    <div className="pizza-grid">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          image={pizza.image}
          description={pizza.description}
          addPizzaToCart={() => addPizzaToCart(pizza)}
        />
      ))}
    </div>
  </div>
);
import React from 'react';

const Home = () => {
  return <h1>Bienvenido a la Página Principal</h1>;
};
import React from 'react';

const About = () => {
  return <h1>Acerca de Nosotros</h1>;
};

import React from 'react';

const NotFound = () => {
  return <h1>404: Página no encontrada</h1>;
};

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};




export default Home;
