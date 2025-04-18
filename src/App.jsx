import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Service from './Service'
import Pricing from './Pricing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Service" element={<Service/>} />
              <Route path="/Pricing" element={<Pricing/>} />
            </Routes>
      </Router>
    </div>
  )
}

export default App
