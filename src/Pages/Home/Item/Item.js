import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({ item }) => {
    const { img, name, description, price, quantity, supplier } = item
    return (
        <div className="container col-sm-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '18rem', padding: '16px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: '#6C757D', fontWeight: 'bold' }}>Brand: {name}</Card.Title>
                    <Card.Text>
                        <h5 style={{ color: '#6C757D' }}>Quantity: {quantity}</h5>
                        <h5 style={{ color: '#6C757D' }}>supplier: {supplier}</h5>
                        <p style={{ color: '#6C757D' }}>{description}</p>
                        <h5 style={{ color: 'gold', fontWeight: 'bold' }}>Price: ${price}</h5>
                    </Card.Text>
                    <Button variant="light">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;