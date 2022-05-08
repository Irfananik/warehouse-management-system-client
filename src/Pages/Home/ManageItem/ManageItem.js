import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageItem = () => {
    const [managItem, setManagItem] = useState([])

    useEffect(() => {
        fetch('https://still-badlands-58804.herokuapp.com/items')
            .then(response => response.json())
            .then(data => setManagItem(data))
    }, [])

    const navigate = useNavigate()

    const handleAddItem = () => {
        navigate('/additem')
    }

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete!')
        if (proceed) {
            const url = `https://still-badlands-58804.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = managItem.filter(item => item._id !== id)
                    setManagItem(remaining)
                })
            toast("Item deleted successfully")
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
            <ToastContainer />
        </div>
    );
};

export default ManageItem;