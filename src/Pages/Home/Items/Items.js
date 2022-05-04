import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])

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
        </div>
    );
};

export default Items;