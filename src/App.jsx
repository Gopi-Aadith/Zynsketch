// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Service from './Service';
import Contact from './Contact';
import BlogPage from './Blogs/BlogPage';
import Layout from './Layout/Layout';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
