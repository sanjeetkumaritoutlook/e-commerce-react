import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import UserProfile from './components/UserProfile';
import WishList from './components/WishList';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
const App = () => {
// Define the products array
const categories = [
  { id: 1, name: 'Electronics', description: 'Gadgets and devices' },
  { id: 2, name: 'Clothing', description: 'Apparel for all seasons' },
  { id: 3, name: 'Home Appliances', description: 'Essential home tools' },
];


  return (
    <Router>
      <Header categories={categories} /> {/* Pass products as a prop */}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
