import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = ({ categories }) => { // Destructure products from props
  
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate to the search page
  
  // Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
    // Filter products based on search query
    const filteredProducts = categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // You can redirect to a search results page with filtered products
    // For example, using React Router to navigate to a search page and pass filtered products
    navigate('/search', { state: { filteredProducts } });

    // Alternatively, if you want to display the results directly in the current page
    // you can handle that logic here
  } else {
    // If no query, you can display all products or show a "no results" message
    console.log('No search query entered');
  }
  };

  return (
    <header style={{ padding: '1em', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5em' }}>
        Logo
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state on input change
          style={{ padding: '0.5em', marginRight: '0.5em' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5em' }}>
          Search
        </button>
      </div>
      <div>
        <Link to="/cart" style={{ color: '#fff', margin: '0 10px' }}>
          Cart
        </Link>
        <Link to="/wishlist" style={{ color: '#fff', margin: '0 10px' }}>
          Wishlist
        </Link>
        <Link to="/profile" style={{ color: '#fff', margin: '0 10px' }}>
          Profile
        </Link>
      </div>
    </header>
  );
}

export default Header;
