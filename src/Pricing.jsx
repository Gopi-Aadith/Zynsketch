import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'
import DirectionalButton from './DirectionalButton/DirectionalButton'
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
      <div className="pricing">

            <div className="header">
                <h1 className="headline">
                    Great &{' '}
                    <span className="highlighted-text">
                    Affordable Pricing
                    <img src="src/assets/brush stroke.svg" alt="stroke" className="highlight-image" />
                    </span>{' '}
                    for everyone!
                </h1>
                <p>Bulk Discounts Available! When your order exceeds 4,000 to 5,000+ images, enjoy special pricing. Contact us for a custom quote!</p>
                <h2>*All website prices are exclusive of taxes.</h2>
                    <DirectionalButton text="Get a Custom Quote" />
            </div>

            <section className="priceslider">

                <div className="pricing-card">
                    <div className="slider-container">
                        <BeforeAfterSlider
                        className="sliderhandle"
                        beforeImage="src/assets/before2.jpg"
                        afterImage="src/assets/After2.jpg"
                        beforeAlt="Before the service"
                        afterAlt="After the service"
                        />
                    </div>

                    <div className="card-content">
                        <h2 className="card-title">Ecommerce services</h2>
                        <p className="card-detail">"Optimized and enhanced images tailored for eCommerce — ready for fast-loading, high-converting product listings.".</p>
                        <div className="price-line">
                        <span className="starts-from">Starts from</span>
                            <span className="price-main">
                                <span className="price-big">$15</span>
                                <span className="price-unit">/image</span>
                            </span>
                        </div>
                        
                        <button className="cta-button">Try for Free</button>
                    </div>
                    

                </div>

                
            </section>
        </div>

    </div>
  )
}

export default Pricing
