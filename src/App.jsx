import React from 'react';
import { Route, Routes } from "react-router-dom";
import { LikesProvider } from './components/LikeContext'; 

import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <LikesProvider>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </LikesProvider>
  );
};

export default App;
