import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItem = () => {
    const [managItem, setManagItem] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setManagItem(data))
    }, [reload])

    const navigate = useNavigate()

    const handleAddItem = () => {
        navigate('/additem')
    }

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete!')
        if(proceed) {
            const url =`http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => console.log(data))
            setReload(!reload)
        }
    }

    return (
        <div className="container">
            <h2 className="my-5" style={{ color: 'white' }}>Mange Items</h2>
            <div className="my-5">
                {
                    managItem.map(i => <div key={i._id}>
                        <table class="table table-striped">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Supplier</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.supplier}</td>
                                    <td>{i.price}</td>
                                </tr>
                            </tbody>
                            <div>
                                <Button onClick={() => handleDeleteItem(i._id)} className="d-flex align-items-center justify-content-center" variant="danger">Delete</Button>
                            </div>
                        </table>
                    </div>)
                }
            </div>
            <Button onClick={handleAddItem} className="my-4" variant="light">Add Item</Button>
        </div>
    );
};

export default ManageItem;