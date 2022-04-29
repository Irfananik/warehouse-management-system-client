import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className="container my-4">
            <Form className="container w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <p className="mt-3" style={{ color: '#6C757D' }}>You have'nt any account? <span onClick={navigateToSignUp} className="text-primary" style={{ cursor: 'pointer', color: '' }}>SignUp</span> </p>
                <Button variant="light" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;