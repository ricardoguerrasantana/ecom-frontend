// Shop.js
import React, { useState } from "react"
import "./Shop.css"

const Shop = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 99.99, category: "electronics" },
    { id: 2, name: "Product 2", price: 149.99, category: "clothing" },
    { id: 3, name: "Product 3", price: 199.99, category: "electronics" },
  ])

  return (
    <div className="shop">
      <aside className="filters">
        <h3>Categories</h3>
        <ul>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Books</li>
        </ul>
        <h3>Price Range</h3>
        <input type="range" min="0" max="1000" />
      </aside>

      <main className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/placeholder-${product.id}.jpg`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Shop
