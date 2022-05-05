import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [managItem, setManagItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => setManagItem(data))
    }, [])
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
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;