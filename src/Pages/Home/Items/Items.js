import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])

    const navigate = useNavigate()

    const handleManageItem = () => {
        navigate('/manageitem')
    }

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setItems(data.slice(0,6)))
    }, [])
    return (
        <div className="container">
            <h2 className="my-4" style={{ color: 'white' }}>Our Items</h2>
            <div className="container row">
                {
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
            <Button onClick={handleManageItem} className="my-4" variant="light">Manage Item</Button>
        </div>
    );
};

export default Items;