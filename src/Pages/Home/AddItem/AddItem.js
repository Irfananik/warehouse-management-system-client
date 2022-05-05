import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/items`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    };

    return (
        <div className="container">
            <h2 className="my-5" style={{ color: 'white' }}>Add Items</h2>
            <form className="d-flex flex-column w-75 mx-auto my-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="my-2" placeholder="Photo Url" type="text" {...register("img", { required: true})} />
                <input className="my-2" placeholder="Name" type="text"  {...register("name", { required: true})} />
                <input className="my-2" placeholder="Quantity"  type="number" {...register("quantity", { required: true})} />
                <input className="my-2" placeholder="Supplier"  type="text" {...register("supplier", { required: true})} />
                <textarea className="my-2" placeholder="Description"  type="text" {...register("description", { required: true})} />
                <input className="my-2" placeholder="Price"  type="number" {...register("price", { required: true})} />
                <input className="my-2"  type="submit" value="Add Item"/>
            </form>
        </div>
    );
};

export default AddItem;