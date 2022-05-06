import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setItem(data))
    }, [reload, itemId])

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
                    toast("Quantity updated")
                    setReload(!reload)
                })
        } else {
            toast('Opss...! Stock is empty')
        }
    }

    //Add item
    const handleAddItem = (event) => {
        event.preventDefault()
        const inputQuantity = event.target.quantity.value
        const newQuantity = parseInt(inputQuantity) + parseInt(item?.quantity)
        const url = `http://localhost:5000/items/${itemId}`
        if (parseInt(inputQuantity) > 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: newQuantity })
            })
                .then(response => response.json())
                .then(data => {
                    toast("Quantity updated")
                    setReload(!reload)
                })
        } else {
            toast('Opss...! You can not input negative value')
        }
        event.target.reset()
    }

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
                <ToastContainer />
            </div>
            <form onSubmit={handleAddItem} className="my-4">
                <h6 className="text-light">Add Quantity</h6>
                <input type="number" name="quantity" required /> <br /> <br />
                <Button variant="light" type="submit">Add</Button>
            </form>
        </div>
    );
};

export default ItemDetails;