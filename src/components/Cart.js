import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();  // Hook to navigate to checkout

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some items before proceeding.");
      return;
    }
    navigate('/checkout');  // Navigate to checkout page
  };
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} style={{ width: '100px' }} />
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </h2>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
