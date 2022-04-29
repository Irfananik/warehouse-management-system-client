import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="container" style={{ padding: '100px' }}>
                <img className="rounded-pill" src={'https://i.ibb.co/fHd59gS/notfound.jpg'} alt="" />
                <div className="mt-4">
                    <Link to={'/'}><Button variant="light" style={{ padding: '12px' }}>Back to Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;