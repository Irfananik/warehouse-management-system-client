import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {itemId} = useParams()
    return (
        <div>
            <h1 style={{ color: '#6C757D' }}>Items Details {itemId}</h1>
        </div>
    );
};

export default ItemDetails;