import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }
    return (
        <div className="container my-4">
            <Form className="container w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <input type="checkbox" name="terms" id="terms" />
                <level htmlFlor='terms' style={{color: '#6C757D'}}> Accept our terms and conditions </level> <br /> <br />
                <p className="" style={{ color: '#6C757D' }}>Allready you have account? <span onClick={navigateToLogin} className="text-primary" style={{ cursor: 'pointer', color: '' }}>Login</span> </p>
                <Button variant="light" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;