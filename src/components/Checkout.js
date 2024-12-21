import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to a server or a mock API
   // Send the formData to the API
   axios
   .post('https://jsonplaceholder.typicode.com/posts', formData)
   .then((response) => {
     alert('Order placed successfully!');
     console.log('Response:', response.data);
   })
   .catch((error) => {
     console.error('Error posting order data:', error);
   });
  };
  return (
    <div>
    <h1>Checkout</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Place Order</button>
    </form>
  </div>

  );
}

export default Checkout;
