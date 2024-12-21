import React, { useLocation } from 'react';

const SearchResults = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts || [];

  return (
    <div>
      <h2>Search Results</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filteredProducts.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
