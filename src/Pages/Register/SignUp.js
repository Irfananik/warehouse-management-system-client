import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const [agrre, setAgree] = useState(false)

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    const handleSignUp = event => {
        event.preventDefault()
    }
    return (
        <div className="container my-4">
             <h3 style={{ color: 'white', fontWeight: 'bold' }}>SignUp Here</h3>
            <Form onSubmit={handleSignUp} className="container w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <input onClick={() => setAgree(!agrre)} type="checkbox" name="terms" id="terms" />
                <level htmlFlor='terms' style={{color: '#6C757D'}}> Accept our terms and conditions </level> <br /> <br />
                <p className="" style={{ color: '#6C757D' }}>Allready you have account? <span onClick={navigateToLogin} className="text-primary" style={{ cursor: 'pointer', color: '' }}>Login</span> </p>
                <Button disabled={!agrre} variant="light" type="submit">
                    SignUp
                </Button>
                <SocialLogin/>
            </Form>
        </div>
    );
};

export default SignUp;