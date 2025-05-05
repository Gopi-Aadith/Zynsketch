import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Service from './Service'
import Pricing from './Pricing'
import Contact from './Contact'
import Blogs from './Blogs/BlogPage'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './Blogs/BlogPage'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Service" element={<Service/>} />
              {/* <Route path="/Pricing" element={<Pricing/>} /> */}
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/Blogs" element={<BlogPage/>} />
            </Routes>
      </Router>
    </div>
  )
}

export default App
