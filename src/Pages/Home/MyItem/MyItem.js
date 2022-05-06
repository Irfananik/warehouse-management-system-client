import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyItem = () => {
    const { email } = useParams()
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        const url = `https://still-badlands-58804.herokuapp.com/myitem?email=${email}`
        fetch(url)
            .then(response => response.json())
            .then(data => setMyItem(data))
    }, [email])
    return (
        <div className="container">
            <h2 className="my-5" style={{ color: 'white' }}>My Items{myItem.length}</h2>
        </div>
    );
};

export default MyItem;