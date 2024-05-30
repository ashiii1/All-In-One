import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Root.jsx';
import FoodMain from './boxes/food/FoodMain.jsx';
import MovieMain from './boxes/movie/MovieMain.jsx';
import ShopMain from './boxes/shop/ShopMain.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/food" element={<FoodMain />} />
      <Route path="/movie" element={<MovieMain />} />
      <Route path="/shop" element={<ShopMain />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
