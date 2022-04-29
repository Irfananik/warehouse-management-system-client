import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className="p-4" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>SmartPhone</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        {
                            user ? <button className="btn btn-link text-decoration-none text-primary" onClick={handleLogOut}>LogOut</button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;