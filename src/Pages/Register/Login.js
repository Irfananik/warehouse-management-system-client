import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()

    const navigateToSignUp = () => {
        navigate('/signup')
    }

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log(email, password)
    }

    return (
        <div className="container my-4">
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>Login Here</h3>
            <Form onSubmit={handleLogin} className="container w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <p className="mt-3" style={{ color: '#6C757D' }}>You have'nt any account? <span onClick={navigateToSignUp} className="text-primary" style={{ cursor: 'pointer', color: '' }}>SignUp</span> </p>
                <Button variant="light" type="submit">
                    Login
                </Button>
                <SocialLogin/>
            </Form>
        </div>
    );
};

export default Login;