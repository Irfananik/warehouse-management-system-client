import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [reload, setReload] = useState(false)
    console.log(item)

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setItem(data))
    }, [reload])

    //Delivered button.......................................................
    const handleDelivered = () => {
        const newQuantity = parseInt(item?.quantity) - 1
        console.log(newQuantity)
        const url = `http://localhost:5000/items/${itemId}`
        if (item?.quantity > 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: newQuantity })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert("Quantity updated")
                    setReload(!reload)
                })
        }else{
            toast('Opss...! Stock is empty')
        }
    }

    //

    return (
        <div >
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
                        <Button onClick={handleDelivered} variant="light">Delivered</Button>
                    </Card.Body>
                </Card>
                <ToastContainer/>
            </div>
            <div className="my-4">
                <h6 className="text-light">Add Quantity</h6>
                <input type="number" required /> <br /> <br />
                <Button variant="light">Add</Button>
            </div>
        </div>
    );
};

export default ItemDetails;