import React from 'react';
import { motion } from 'framer-motion';
import Sections from './Sections';
import Stats from './Stats';
import FAQ from './FAQ';

import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="hero-section">
          <div className="backdrop">
            <img src="src/assets/pexels-tima-miroshnichenko-7205402.jpg" alt="backdrop" />
          </div>
          <div className="darker"></div>

          <motion.div
            className="section-align"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="section1">
              <h1>
                <span>
                  Crafting every single shot with <span className='highlighted-txt'>Absolute Perfection</span>
                </span>
              </h1>
              <h2>
                High-quality edits that turn raw images into stunning visuals for brands, studios, and creators.
              </h2>

              <div className="buttons">
                <motion.div
                  className="CTA"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <span>Get a free trial</span>
                </motion.div>

                <motion.div
                  className="CTA"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <span>Get a free quote</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Sections />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <FAQ />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
