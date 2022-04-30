import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div classNameName="container my-5">
                <h1 className="my-5" style={{ color: 'white', fontWeight: 'bold' }}>About eElectronics</h1>
                <div className="card my-5 container d-flex alig-items-center justify-content-center">
                    <div className="container d-flex alig-items-center justify-content-center my-5">
                        <img src={'https://i.ibb.co/rQ4p0zJ/electronics-banner-1.jpg'} className="card-img-top w-25" alt="..." />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-2" style={{ color: '#6C757D', fontWeight: 'bold' }}>eElectronics</h4>
                        <p className="card-text" style={{ color: '#6C757D' }}>The Electronics Warehouse has 12 years’ experience in the electronics industry, buying large quantities of consumer Electronics from the manufacturer. Our power to buy this stock in bulk means we are able to pass on great savings to you.

                            We specialise in mobile phones, tablets and accessories, offering them at super low prices. We accept regular deliveries from our suppliers meaning we always have exciting fresh stock, with availability varying daily. You can buy the latest models with 12 months warranty as standard, and free shipping included. If you are interested in buying from us wholesale please get in touch.

                            Please feel free to contact us with any queries you may have with regards to our products, services and product promotions.

                            Please note: As some of our products are Graded they do not come with the serial numbers. Samsung themselves take off the serial numbers on the products before shipping to us. This is to ensure customers do not return items in store for a RRP refund.</p>
                        <Link style={{ textDecoration: 'none' }} to='/'>See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;