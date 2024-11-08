// Cart.js
import React from "react"
import "./Cart.css"

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 149.99, quantity: 1 },
  ]

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={`/placeholder-${item.id}.jpg`} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </div>
            </div>
            <button className="remove-item">Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>$10.00</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${(total + 10).toFixed(2)}</span>
        </div>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
