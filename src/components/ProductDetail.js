import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import { useCart } from './../contexts/CartContext'; // Import useCart hook


//function ProductDetail() {
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useCart();
  console.log(cart, addToCart, removeFromCart); // Ensure these are not undefined
  // useEffect(() => {
  //   // Fetch product/category by ID (replace with actual API)
  //   axios.get(`https://api.example.com/category/${id}`)
  //     .then(response => {
  //       setProduct(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching product details:', error);
  //     });
  // }, [id]);

  useEffect(() => {
    // Mocked product data
    const mockProducts = [
      {
        id: '1',
        name: 'Mock Product 1',
        image: 'https://picsum.photos/200/300?random=1',
        description: 'This is a mock product description.',
        price: '300',
        quantity: '1',
      },
      {
        id: '2',
        name: 'Mock Product 2',
        image: 'https://picsum.photos/200/300?random=2',
        description: 'This is a mock product description.',
        price: '400',
        quantity: '5',
      },
      {
        id: '3',
        name: 'Mock Product 3',
        image: 'https://picsum.photos/200/300?random=3',
        description: 'This is a mock product description.',
        price: '500',
        quantity: '7',
      },
    ];

    // Find the product with the matching ID
    const selectedProduct = mockProducts.find((product) => product.id === id);

    // Set the selected product
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;
// Function to handle adding the product to the cart
const handleAddToCart = () => {
  addToCart(product); // Add product to cart using context
  alert(`${product.name} has been added to the cart!`); // Optional: confirmation alert
};
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
       <p>Price: ${product.price}</p>
      <p>Available Quantity: {product.quantity}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
