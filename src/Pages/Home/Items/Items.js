import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="container">
            <h2 className="my-4" style={{ color: 'white' }}>Our Items</h2>
            <div className="container row">
                {
                    items.map(item => <Item key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Items;