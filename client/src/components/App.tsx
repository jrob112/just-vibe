import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import Reviews from './Reviews'
import Profile from './Profile';
import Feed from './Feed';

const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/search-results/:query' element={<SearchResults />} />
        <Route path='/user' element={<Profile />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </div>
  )
};

export default App;
