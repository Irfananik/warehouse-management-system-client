import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        const url = `https://still-badlands-58804.herokuapp.com/myitem?email=${user.email}`
        fetch(url)
            .then(response => response.json())
            .then(data => setMyItem(data))
    }, [user.email])

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete!')
        if (proceed) {
            const url = `https://still-badlands-58804.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const remaining = myItem.filter(item => item._id !== id)
                    setMyItem(remaining)
                })
            toast("Item deleted successfully")
        }
    }
    return (
        <div className="container">
            <h2 className="my-5" style={{ color: 'white' }}>My Items: {myItem.length}</h2>
            <div className="my-4" style={{ color: 'white' }}>
                <h3 style={{ color: 'white' }}>Profile Email: {user.email}</h3>
            </div>
            <div className="container">
                {
                    myItem.map(i => <div key={i._id}>
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
                                <ToastContainer/>
                            </div>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;