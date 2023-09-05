import React from 'react';


import HomePage from './HomePage';

import { Routes, Route } from "react-router-dom";
import About from './About';

const Main = () => {
  return (
    <main>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
      
      </Routes>
  
   
    </main>
  );
};

export default Main;
