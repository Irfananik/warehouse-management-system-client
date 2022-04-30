import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let errorMessage

    const navigateToSignUp = () => {
        navigate('/signup')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail,
        sending,
        errorReset
    ] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";


    if (error) {
        errorMessage = <p className="text-danger">Error: {error.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email')
        } else {
            toast('Please enter your email address...!')
        }
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="container my-4">
            <h3 style={{ color: 'white', fontWeight: 'bold' }}>Login Here</h3>
            <Form onSubmit={handleLogin} className="container w-75">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p className="mt-3" style={{ color: '#6C757D' }}>You have'nt any account? <span onClick={navigateToSignUp} className="text-primary" style={{ cursor: 'pointer' }}>SignUp</span> </p>

                <p className="mt-2 text-center" style={{ color: '#6C757D' }}>Forget your password? <span onClick={resetPassword} className="text-primary" style={{ cursor: 'pointer' }}>Reset Password</span> </p>
                {errorMessage}

                <Button variant="light" type="submit">
                    Login
                </Button>

                <SocialLogin />
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;