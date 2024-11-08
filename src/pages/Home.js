// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'placeholder1.jpg' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'placeholder2.jpg' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'placeholder3.jpg' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Ecom</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="product-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="promotion">
        <h2>Special Offers</h2>
        <div className="promotion-content">
          <div className="offer">
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="offer">
            <h3>New Arrivals</h3>
            <p>Check out our latest collection</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;