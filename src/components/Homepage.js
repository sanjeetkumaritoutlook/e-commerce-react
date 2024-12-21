import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
//function Homepage() {
const Homepage = () => {
  
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   // Fetch categories (replace with actual API)
  //   axios.get('https://api.example.com/categories')
  //     .then(response => {
  //       setCategories(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching categories:', error);
  //     });
  // }, []);
  useEffect(() => {
    // Mock categories instead of making an actual API call
    const mockCategories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Home Appliances' },
    ];
    setCategories(mockCategories);
  }, []);
  
  return (
    <div>
      <h1>Categories</h1>
      {categories.map(category => (
        <Link to={`/category/${category.id}`} key={category.id}>
          <button>{category.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Homepage;
