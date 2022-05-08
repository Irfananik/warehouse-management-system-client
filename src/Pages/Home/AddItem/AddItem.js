import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const email = user?.email
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)
        const url = `https://still-badlands-58804.herokuapp.com/items`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...data, email})
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            toast("Item added successfully")
            event.target.reset()
        })
        console.log(data)
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
            <ToastContainer/>
        </div>
    );
};

export default AddItem;