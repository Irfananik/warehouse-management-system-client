import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div className="d-flex align-items-center justify-content-center my-5 ">
            <Card style={{ width: '18rem', padding: '16px' }}>
                <Card.Img variant="top" src={item?.img} />
                <Card.Body>
                    <Card.Title style={{ color: '#6C757D', fontWeight: 'bold' }}>Title: {item?.name}</Card.Title>
                    <Card.Text>
                        <h5 style={{ color: '#6C757D' }}>Quantity: {item?.quantity}</h5>
                        <h5 style={{ color: '#6C757D' }}>supplier: {item?.supplier}</h5>
                        <p style={{ color: '#6C757D' }}>{item?.description}</p>
                        <h5 style={{ color: 'gold', fontWeight: 'bold' }}>Price: ${item?.price}</h5>
                    </Card.Text>
                    <Button variant="light">Delivered</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetails;